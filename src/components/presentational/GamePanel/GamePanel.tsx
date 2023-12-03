// Components
import { Button } from "../../ui/Button/Button";
import { BackToLevelSelection } from "../BackToLevelSelection/BackToLevelSelection";
import { MoveCounter } from "../MoveCounter/MoveCounter";
import { RemainingPairsCounter } from "../RemainingPairsCounter/RemainingPairsCounter";
import { TimeCounter } from "../TimeCounter/TimeCounter";

export const GamePanel = () => {
  return (<>
    <div className="flex flex-col gap-2 justify-between">
      <BackToLevelSelection />
      <div className="flex gap-2 justify-between">
        <Button className="text-xl lg:text-4xl bg-secondary">🔄 Restart</Button>
        <Button className="text-xl lg:text-4xl bg-tertiary">🔍Solution</Button>
      </div>
    </div>
    <div className="bg-[rgba(255,255,255,0.9)] p-4 lg:p-8 rounded-3xl flex flex-col gap-2 lg:gap-4 text-xl md:text-2xl lg:text-4xl">
      <TimeCounter />
      <MoveCounter moves={0} />
      <RemainingPairsCounter remainingPairs={0} />
    </div>
  </>);
}