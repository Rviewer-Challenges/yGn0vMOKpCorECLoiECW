type Props = {
  moves: number;
};

export const MoveCounter = ({moves} : Props) => {
  return (
    <div className="text-center">
      <div className="text-4xl text-primary">👣 Moves done:</div>
      <div className="text-6xl text-quaternary">
        {moves}
      </div>
    </div>
  );
};