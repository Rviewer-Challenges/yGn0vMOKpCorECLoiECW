// Components
import { Button } from '../../ui/Button/Button';
import { Modal } from '../../ui/Modal/Modal';

type Props = {
  onClose: () => void;
  onStartAgain: () => void;
}

export const GameOver = ({ onClose, onStartAgain }: Props) => {
  const startAgainHandler = () => {
    onStartAgain();
    onClose();
  }

  return (
    <Modal onClose={onClose}>
      <div className="text-6xl text-primary pb-8">
        Game over!😰
      </div>
      <Button onClick={startAgainHandler} className="bg-quaternary text-xl lg:text-2xl">
        Start again 🛸
      </Button>
    </Modal>
  );
};
