import { useNavigate } from "react-router-dom";
// Configuration
import { levels } from "../../../configuration/game.configuration";
// Components
import { Level } from "../../presentational/Level/Level";

export const DifficultyLevelSelector = () => {
  const navigate = useNavigate();

  const selectDifficultyHandler = (dificulty: string) => {
    navigate(`/game?difficulty=${dificulty}`);
  }

  return (
    <div className="h-screen w-screen bg-cover bg-[url('src/assets/images/background.svg')] flex items-center justify-center">
      <div className="bg-[rgba(255,255,255,0.9)] p-8 m-8 rounded-3xl">
        <h1 className="text-6xl text-primary mb-8">
          Select game difficulty:
        </h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {levels.map((level, i) => (
            <div className="flex-grow" key={i}>
              <Level level={level} onClick={() => selectDifficultyHandler(level.name)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}