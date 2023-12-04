import type { Meta, StoryObj } from '@storybook/react';

// Components
import { TimeCounter } from "../../components/presentational/TimeCounter/TimeCounter";

const meta = {
  title: 'Atoms/TimeCounter',
  component: TimeCounter,
  decorators: [(story) => <div className="w-40">{story()}</div>],
} satisfies Meta<typeof TimeCounter>;

type Story = StoryObj<typeof TimeCounter>;

export const Default = {
} satisfies Story;

export default meta;