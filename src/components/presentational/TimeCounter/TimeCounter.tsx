import { Ref, forwardRef, useEffect, useImperativeHandle, useState } from 'react';
// Configuration
import { gameConfiguration } from '../../../configuration/game.configuration';

type Props = {
  onTimeUp: () => void;
};

export type TimeCounterRefType = {
  restartCountdown: () => void;
  stop: () => void;
}

export const TimeCounter = forwardRef(({onTimeUp}: Props, ref: Ref<TimeCounterRefType>) => {
  const [counter, setCounter] = useState<number>(gameConfiguration.timeLimit);

  useImperativeHandle(ref, () => ({
    restartCountdown: () => {
      setCounter(gameConfiguration.timeLimit);
    },
    stop: () => {
      setCounter(0);
    }
  }));

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (counter > 0) {
      timer = setInterval(() => {
        setCounter((prevSeconds) => {
          const newSeconds = prevSeconds - 1;
          if (newSeconds === 0) {
            onTimeUp();
          }
          if (newSeconds <= 0) {
            return 0;
          }
          return newSeconds;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div data-testid="time-counter" className="flex justify-between">
      <div className="text-primary whitespace-nowrap">🛎️ Time left:</div>
      <div className={`${counter > 19 ? "text-quaternary" : "text-red"}`}>
        {counter}
      </div>
    </div>
  );
});