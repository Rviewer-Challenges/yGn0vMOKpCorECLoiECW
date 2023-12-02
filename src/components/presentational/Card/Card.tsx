import { Ref, forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

// Styles
import './Card.css';

type Props = {
  // The emoji to be displayed on the front of the card.
  emoji: string;
  initialShowBack?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export type CardRefType = {
  reset: () => void;
}

/**
 * @component
 * @param {React.Ref<CardRefType>} ref - The ref object for accessing the card's imperative methods.
 */
export const Card = forwardRef(({emoji, initialShowBack = true, disabled, onClick}: Props, ref: Ref<CardRefType>) => {
  const [showBack, setShowBack] = useState(true);

  useEffect(() => {
    setShowBack(initialShowBack);
  }, [initialShowBack]);

  useImperativeHandle(ref, () => ({
    reset() {
      setShowBack(true);
    }
  }));

  const handleCardClick = () => {
    if (disabled) return;
    setShowBack((showBack) => !showBack);
    onClick();
  }

  return(
    <div data-testid="card" className="card-wrapper h-full w-full">
      <CSSTransition
        in={showBack}
        timeout={300}
        classNames='flip'
      >
        <button disabled={disabled} className="card h-full w-full relative shadow-xl select-none rounded-xl aspect-square" onClick={handleCardClick}> 
          <div className="back absolute w-full h-full top-0 border-primary border-8 rounded-xl text-center flex items-center justify-center bg-tertiary">
            <div className="text-4xl origin-bottom-left text-primary">Emoji<br />Memory<br />game</div>
          </div>
          <div className="front w-full h-full top-0 absolute flex items-center justify-center leading-6 text-9xl rounded-xl">
            {emoji}
          </div>
        </button>
      </CSSTransition>
    </div>
  );
});