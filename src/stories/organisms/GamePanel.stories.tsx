import type { Meta } from '@storybook/react';

// Components
import { GamePanel } from '../../components/presentational/GamePanel/GamePanel';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'Organisms/GamePanel',
  component: GamePanel,
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
} satisfies Meta<typeof GamePanel>;

export const Default = {
  args: {
    moves: 0,
    remainingPairs: 8,
    onTimeUp: () => {},
    onStartAgain: () => {},
    onShowSolution: () => {},
  }
};

export default meta;