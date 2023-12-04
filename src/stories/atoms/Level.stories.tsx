import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Level } from "../../components/presentational/Level/Level";

const meta = {
  title: 'Atoms/Level',
  component: Level,
} satisfies Meta<typeof Level>;

type Story = StoryObj<typeof meta>;

export const Easy = {
  args: {
    level: {
      name: "Easy",
      verticalCards: 4,
      horizontalCards: 4,
    },
    onClick: () => {},
  },
  render: (args) => <div className="w-56"><Level {...args} /></div>,
} satisfies Story;

export const Medium = {
  args: {
    level: {
      name: "Medium",
      verticalCards: 6,
      horizontalCards: 4,
    },
    onClick: () => {},
  },
  render: (args) => <div className="w-[300px]"><Level {...args} /></div>,
} satisfies Story;

export default meta;