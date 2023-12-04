import { useState } from 'react';
import type { Meta } from '@storybook/react';

// Components
import { YouWon } from '../../components/presentational/YouWon/YouWon';

const meta = {
  title: 'Molecules/YouWon',
  component: YouWon,
} satisfies Meta<typeof YouWon>;

export const Default = {
  render: () => {
    const [show, setShow] = useState(false);

    return (<div>
      <button className="bg-gray-400 rounded-md p-2 mb-4" onClick={() => setShow(true)}>Open modal</button>
      { show && <YouWon onClose={() => setShow(false)} onStartAgain={() => console.log("start again")} /> }
    </div>);
  }
};

export default meta;