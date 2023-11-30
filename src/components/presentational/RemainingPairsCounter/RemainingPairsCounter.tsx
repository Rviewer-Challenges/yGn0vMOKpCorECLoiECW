type Props = {
    remainingPairs: number;
  };
  
  export const RemainingPairsCounter = ({remainingPairs} : Props) => {
    return (
      <div className="text-center">
        <div className="text-4xl text-primary">👯 Remaining pairs:</div>
        <div className="text-6xl text-quaternary">
          {remainingPairs}
        </div>
      </div>
    );
  };