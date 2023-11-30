import { useEffect, useState } from 'react';

export const TimeCounter = () => {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 0) {
          clearInterval(timer);
          return prevCounter;
        }
        return prevCounter - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="text-center">
      <div className="text-4xl text-primary">Time left:</div>
      <div className={`text-6xl ${counter > 19 ? "text-quaternary" : "text-red"}`}>
        {counter}
      </div>
    </div>
  );
};