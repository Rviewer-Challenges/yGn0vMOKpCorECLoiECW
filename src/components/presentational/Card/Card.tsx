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
    <div data-testid="card" className="card-wrapper">
      <CSSTransition
        in={showBack}
        timeout={300}
        classNames='flip'
      >
        <button disabled={disabled} className={"card relative shadow lg:shadow-xl select-none rounded-xl " + 
          "h-14 md:h-20 lg:h-24 xl:h-32 " +
          "w-14 md:w-20 lg:w-24 xl:w-32"}
          onClick={handleCardClick}> 
          <div className={"back absolute w-full h-full top-0 border-primary text-center flex items-center justify-center bg-tertiary " + 
            "border-4 md:border-6 lg:border-8 " +
            "rounded-md md:rounded-xl"}
          >
            <div className="hidden md:block md:text-sm lg:text-lg xl:text-2xl origin-bottom-left text-primary">Emoji<br />Memory<br />game</div>
          </div>
          <div className={"front w-full h-full top-0 absolute flex items-center justify-center leading-6 bg-white rounded-md md:rounded-xl " +
            "text-3xl md:text-5xl lg:text-6xl xl:text-7xl"}
          >
            {emoji}
          </div>
        </button>
      </CSSTransition>
    </div>
  );
});