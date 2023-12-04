type Props = {
  moves: number;
};

export const MoveCounter = ({moves} : Props) => {
  return (
    <div data-testid="move-counter" className="flex justify-between">
      <div className="text-primary whitespace-nowrap">👣 Moves done:</div>
      <div className="text-quaternary">
        {moves}
      </div>
    </div>
  );
};