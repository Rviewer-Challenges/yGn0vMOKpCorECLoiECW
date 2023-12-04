import { useNavigate } from 'react-router-dom';

// Styles
import './Home.css';
// Components
import { Button } from '../../ui/Button/Button';

export const Home = () => {
  const navigate = useNavigate();

  const startGameHandler = () => {
    navigate('/select-difficulty');
  }

  return (
    <div className="h-screen w-screen bg-cover bg-[url('src/assets/images/background.svg')]">
      <div className="flex flex-col opacity-100 items-center justify-center h-full p-4">
        <div className="bg-[rgba(255,255,255,0.9)] p-4 lg:p-8 rounded-3xl">
          <div className="text-3xl lg:text-6xl text-primary">
          👋Welcome to Emoji Memory Game!
          </div>
          <div className="flex justify-end">
            <div className="text-xl lg:text-3xl mb-8 p-2 font-bold border-red border-4 inline-block text-red uppercase -rotate-12 stamp">
              Christmas Edition
            </div>
          </div>
          <div className="flex justify-center">
            <Button onClick={startGameHandler} className="text-xl lg:text-4xl">
              Start game 🚀
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}