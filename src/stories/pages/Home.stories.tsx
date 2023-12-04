import type { Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

// Components
import { Home } from '../../components/containers/Home/Home';

const meta = {
  title: 'Pages/Home',
  component: Home,
  decorators: [(story) => <MemoryRouter initialEntries={['test?difficulty=easy']}>{story()}</MemoryRouter>],
} satisfies Meta<typeof Home>;

export const Default = {};

export default meta;