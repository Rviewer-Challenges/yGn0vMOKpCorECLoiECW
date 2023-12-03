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
    <div className="flex justify-between">
      <div className="text-primary whitespace-nowrap">🛎️ Time left:</div>
      <div className={`${counter > 19 ? "text-quaternary" : "text-red"}`}>
        {counter}
      </div>
    </div>
  );
};