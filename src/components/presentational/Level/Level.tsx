import { Level as LevelType } from "../../../models/level.model";

type Props = {
  level: LevelType;
  onClick: () => void;
};

export const Level = ({ level, onClick }: Props) => {
  const getTotalCards = () => {
    return level.verticalCards * level.horizontalCards;
  }

  return (
    <button className="flex flex-col w-full h-full border-quaternary hover:bg-quaternary border-4 p-4 rounded-lg hover:scale-105 hover:shadow-xl ease-out transition-all [&>h2]:hover:text-white" onClick={onClick}>
      <h2 className="text-3xl lg:mb-4 text-quaternary self-center">{level.name}</h2>
      <div className="gap-1 w-full hidden lg:grid"
        style={{gridTemplateColumns: `repeat(${level.verticalCards}, 1fr)`, gridTemplateRows: `repeat(${level.horizontalCards}, 1fr)`}}>
          {[...Array(getTotalCards())].map((_, i) => (
            <div key={i} className="border-primary border-4 rounded bg-tertiary h-full w-full aspect-square min-h-[40px]"></div>
          ))}
      </div>
    </button>
  );
}