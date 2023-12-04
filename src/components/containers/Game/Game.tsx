import { useLocation, useParams } from 'react-router-dom';
import { Fragment, createRef, useEffect, useState } from 'react';

// Configuration
import { emojis, levels } from '../../../configuration/game.configuration';
// Models
import { CardState } from '../../../models/cardState.model';
import { Level as LevelModel } from '../../../models/level.model';
// Utils
import { getRandomSubarray, shuffleArray } from '../../../utils/array.utils';
// Hooks
import { useScreenOrientation } from '../../../hooks/useScreenOrientation';
// Components
import { Card } from '../../presentational/Card/Card';
import { GamePanel, TimeCounterRefType } from '../../presentational/GamePanel/GamePanel';
import { GameOver } from '../../presentational/GameOver/GameOver';

export const Game = () => {
  const timeCounterRef = createRef<TimeCounterRefType>();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const difficulty = queryParams.get('difficulty');

  const screenOrientation = useScreenOrientation();
  const [cards, setCards] = useState<CardState[]>([]);
  const [level, setLevel] = useState<LevelModel>(levels[0]);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [remainingPairs, setRemainingPairs] = useState<number>(0);
  const [showGameOver, setShowGameOver] = useState<boolean>(false);

  const disableAllCards = () => {
    setCards((updatedCards) => updatedCards.map((c) => ({...c, isDisabled: true})));
  }

  const flipAllCards = () => {
    setCards((updatedCards) => updatedCards.map((c) => ({...c, isFlipped: true})));
  }

  const cardClickHandle = (card: CardState) => {
    if (card.isMatched || card.isDisabled) return;

    // Flip the selected card, and disable it
    const updatedCards = cards.map((c) => {
      if (c.id === card.id) {
        return {
          ...c,
          isFlipped: true,
          isDisabled: true,
        }
      }
      return c;
    });
    setCards(updatedCards);

    const flippedCards = updatedCards.filter((c) => c.isFlipped && !c.isMatched);

    if (flippedCards.length === 2) {
      setMoveCount((moveCount) => moveCount + 1);

      if (flippedCards[0].emoji === flippedCards[1].emoji) {
        setRemainingPairs((remainingPairs) => remainingPairs - 1);
        const matchedCards = updatedCards.map((c) => {
          if (c.isFlipped) {
            return {
              ...c,
              isMatched: true,
              isDisabled: true,
            }
          }
          return c;
        });

        setCards(matchedCards);
        return;
      }

      // If the cards don't match, flip them back after 1 second.
      // Disable all cards while the cards are flipped back.
      const disabledCards = updatedCards.map((c) => {
        return {
          ...c,
          isDisabled: true,
        }
      });
      setCards(disabledCards);

      setTimeout(() => {
        const flippedCardsReset = updatedCards.map((c) => {
          const modifiedCard = {...c};
          if (c.isFlipped && !c.isMatched) {
            modifiedCard.isFlipped = false;
          }
          if (!c.isMatched) {
            modifiedCard.isDisabled = false;
          }
          return modifiedCard;
        });

        setCards(flippedCardsReset);
      }, 700);
    }
  }

  const timeUpHandler = () => {
    setShowGameOver(true);
    disableAllCards();
  }

  const startAgainHandler = () => {
    initializeCards(difficulty as string);
    timeCounterRef.current?.restartCountdown();
    setMoveCount(0);
  }

  const showSolutionHandler = () => {
    disableAllCards();
    flipAllCards();
    timeCounterRef.current?.stop();
  }

  const initializeCards = (difficulty: string) => {
    const level = levels.find((level) => level.name === difficulty) as LevelModel;
    const pairs = level.horizontalCards * level.verticalCards / 2;

    setRemainingPairs(pairs);

    const selectedEmojis = getRandomSubarray(emojis, pairs);

    const shuffledEmojis = shuffleArray([...selectedEmojis, ...selectedEmojis]);

    const newCards = shuffledEmojis.map((emoji, index) => ({
      id: `${index}-${emoji}`,
      emoji,
      isFlipped: false,
      isMatched: false,
      isDisabled: false,
    }));

    setCards(newCards);
  }

  useEffect(() => {
    if (!difficulty) return;

    initializeCards(difficulty);
  }, [difficulty]);

  useEffect(() => {
    const level = levels.find((level) => level.name === difficulty) as LevelModel;

    setLevel(level);
  }, [difficulty]);

  const verticalCards = screenOrientation === 'landscape' ? level.verticalCards : level.horizontalCards;
  const horizontalCards = screenOrientation === 'landscape' ? level.horizontalCards : level.verticalCards;

  return (
    <div className="flex p-2 md:p-4 xl:p-8 h-screen w-screen overflow-hidden" style={{flexDirection: screenOrientation === "landscape" ? "row" : "column"}}>
      <div className="flex flex-col gap-2 lg:gap-8 mb-2 md:mr-4 lg:mr-8">
        <GamePanel
          ref={timeCounterRef}
          moves={moveCount}
          remainingPairs={remainingPairs}
          onTimeUp={timeUpHandler}
          onStartAgain={startAgainHandler}
          onShowSolution={showSolutionHandler} />
      </div>
      <div className="grid gap-2 lg:gap-3 xl:gap-6 mx-auto my-auto"
        style={{gridTemplateColumns: `repeat(${verticalCards}, 1fr)`, gridTemplateRows: `repeat(${horizontalCards}, 1fr)`,
        }}>
        { cards.map((card) => (
          <Fragment key={card.id}>
            <Card
              emoji={card.emoji}
              disabled={card.isDisabled}
              initialShowBack={!card.isFlipped}
              onClick={() => cardClickHandle(card)} />
          </Fragment>
        ))}
      </div>
      { showGameOver && <GameOver onClose={() => setShowGameOver(false)} onStartAgain={startAgainHandler} />}
    </div>
  );
}