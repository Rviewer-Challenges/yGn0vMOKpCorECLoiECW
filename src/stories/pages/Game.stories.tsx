import type { Meta } from '@storybook/react';

// Components
import { MemoryRouter } from 'react-router-dom';
import { Game } from '../../components/containers/Game/Game';

const meta = {
  title: 'Pages/Game',
  component: Game,
  decorators: [(story) => <MemoryRouter initialEntries={['test?difficulty=easy']}>{story()}</MemoryRouter>],
} satisfies Meta<typeof Game>;

export const Default = {};

export default meta;