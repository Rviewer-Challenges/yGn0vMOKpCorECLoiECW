import type { Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

// Components
import { BackToLevelSelection } from '../../components/presentational/BackToLevelSelection/BackToLevelSelection';

const meta = {
  title: 'Atoms/BackToLevelSelection',
  component: BackToLevelSelection,
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
} satisfies Meta<typeof BackToLevelSelection>;

export const Default = {};

export default meta;