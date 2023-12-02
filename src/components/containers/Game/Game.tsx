import { useLocation, useParams } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';

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

export const Game = () => { 
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const difficulty = queryParams.get('difficulty');

  const screenOrientation = useScreenOrientation();
  const [cards, setCards] = useState<CardState[]>([]);
  const [level, setLevel] = useState<LevelModel>(levels[0]);

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
      if (flippedCards[0].emoji === flippedCards[1].emoji) {
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
      }, 1000);
    }
  }

  const initializeCards = (difficulty: string) => {
    const level = levels.find((level) => level.name === difficulty) as LevelModel;

    const emojiCount = (level.horizontalCards * level.verticalCards) / 2;

    const selectedEmojis = getRandomSubarray(emojis, emojiCount);

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
    <div className="grid gap-4 h-screen w-screen p-4"
      style={{gridTemplateColumns: `repeat(${verticalCards}, 1fr)`, gridTemplateRows: `repeat(${horizontalCards}, 1fr)`}}>
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
  );
}