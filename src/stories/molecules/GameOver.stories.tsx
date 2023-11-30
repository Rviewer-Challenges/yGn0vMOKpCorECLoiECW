import { useState } from 'react';
import type { Meta } from '@storybook/react';

// Components
import { GameOver } from '../../components/presentational/GameOver/GameOver';

const meta = {
  title: 'Molecules/GameOver',
  component: GameOver,
} satisfies Meta<typeof GameOver>;

export const Default = {
  render: () => {
    const [show, setShow] = useState(false);

    return (<div>
      <button className="bg-gray-400 rounded-md p-2 mb-4" onClick={() => setShow(true)}>Open modal</button>
      { show && <GameOver onClose={() => setShow(false)} onStartAgain={() => console.log("start again")} /> }
    </div>);
  }
};

export default meta;