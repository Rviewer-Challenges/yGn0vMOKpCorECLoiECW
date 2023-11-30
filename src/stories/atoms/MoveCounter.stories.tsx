import type { Meta, StoryObj } from '@storybook/react';

// Components
import { MoveCounter } from '../../components/presentational/MoveCounter/MoveCounter';

const meta = {
  title: 'Atoms/MoveCounter',
  component: MoveCounter,
} satisfies Meta<typeof MoveCounter>;

type Story = StoryObj<typeof MoveCounter>;

export const Default = {
  args: {
    moves: 10,
  },
} satisfies Story;

export default meta;