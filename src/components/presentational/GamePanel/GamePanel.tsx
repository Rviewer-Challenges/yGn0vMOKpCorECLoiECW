// Components
import { Ref, forwardRef } from "react";
import { Button } from "../../ui/Button/Button";
import { BackToLevelSelection } from "../BackToLevelSelection/BackToLevelSelection";
import { MoveCounter } from "../MoveCounter/MoveCounter";
import { RemainingPairsCounter } from "../RemainingPairsCounter/RemainingPairsCounter";
import { TimeCounter, TimeCounterRefType } from "../TimeCounter/TimeCounter";
export type { TimeCounterRefType } from "../TimeCounter/TimeCounter";

type Props = {
  moves: number;
  remainingPairs: number;
  onTimeUp: () => void;
  onStartAgain: () => void;
  onShowSolution: () => void;
};

export const GamePanel = forwardRef(({moves, remainingPairs, onTimeUp, onStartAgain, onShowSolution}: Props, timeCounterRef: Ref<TimeCounterRefType>) => {
  return (<>
    <div className="flex flex-col gap-2 justify-between">
      <BackToLevelSelection />
      <div className="flex gap-2 justify-between">
        <Button onClick={onStartAgain} className="text-xl lg:text-4xl bg-secondary">🔄 Restart</Button>
        <Button onClick={onShowSolution} className="text-xl lg:text-4xl bg-tertiary">🔍Solution</Button>
      </div>
    </div>
    <div className="bg-[rgba(255,255,255,0.9)] p-4 lg:p-8 rounded-3xl flex flex-col gap-2 lg:gap-4 text-xl md:text-2xl lg:text-4xl">
      <TimeCounter ref={timeCounterRef} onTimeUp={onTimeUp} />
      <MoveCounter moves={moves} />
      <RemainingPairsCounter remainingPairs={remainingPairs} />
    </div>
  </>);
})