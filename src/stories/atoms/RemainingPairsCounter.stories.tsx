import type { Meta, StoryObj } from '@storybook/react';

// Components
import { RemainingPairsCounter } from '../../components/presentational/RemainingPairsCounter/RemainingPairsCounter';

const meta = {
  title: 'Atoms/RemainingPairsCounter',
  component: RemainingPairsCounter,
  decorators: [(story) => <div className="w-40">{story()}</div>],
} satisfies Meta<typeof RemainingPairsCounter>;

type Story = StoryObj<typeof RemainingPairsCounter>;

export const Default = {
  args: {
    remainingPairs: 10,
  },
} satisfies Story;

export default meta;