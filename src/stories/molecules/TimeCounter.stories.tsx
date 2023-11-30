import type { Meta, StoryObj } from '@storybook/react';

// Components
import { TimeCounter } from "../../components/presentational/TimeCounter/TimeCounter";

const meta = {
  title: 'Molecules/TimeCounter',
  component: TimeCounter,
} satisfies Meta<typeof TimeCounter>;

type Story = StoryObj<typeof TimeCounter>;

export const Default = {
} satisfies Story;

export default meta;