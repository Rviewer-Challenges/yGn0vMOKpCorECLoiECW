type Props = {
    remainingPairs: number;
  };
  
  export const RemainingPairsCounter = ({remainingPairs} : Props) => {
    return (
      <div data-testid="left-pairs" className="flex justify-between">
        <div className="text-primary whitespace-nowrap">👯 Left pairs:</div>
        <div className="text-quaternary">
          {remainingPairs}
        </div>
      </div>
    );
  };