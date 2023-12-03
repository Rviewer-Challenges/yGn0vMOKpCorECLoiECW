import { useNavigate } from "react-router-dom";

// Components
import { Button } from "../../ui/Button/Button";

export const BackToLevelSelection = () => {
  const navigate = useNavigate();

  const backToLevelSelectionHandle = () => {
    navigate('/select-difficulty');
  }

  return (
    <Button onClick={backToLevelSelectionHandle} className="text-xl lg:text-4xl">⬅️ Back to level selection</Button>
  );
}