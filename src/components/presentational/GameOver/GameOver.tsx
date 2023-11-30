import './GameOver.css';

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
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-500 bg-opacity-50">
      <div className="p-8 w-full max-w-2xl max-h-full">
        <div className="relative border-8 border-primary bg-white rounded-3xl shadow-lg p-8 text-center modal">
          <div className="text-6xl text-primary pb-8">
            Game over!😰
          </div>
          <button onClick={startAgainHandler} className="bg-quaternary rounded-lg p-4 text-white text-xl">
            Start again 🛸
          </button>
          <button className="p-4 text-xl bg-tertiary rounded-full absolute -top-10 -right-10" onClick={onClose}>
            ❌
          </button>
        </div>
      </div>
    </div>
  );
};
