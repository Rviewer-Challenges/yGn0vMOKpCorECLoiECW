import { useRef, useState } from "react";
import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Card } from "../../components/presentational/Card/Card";

const meta = {
  title: 'Atoms/Card',
  component: Card,
  decorators: [(story) => <div className="h-48 w-48">{story()}</div>],
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    emoji: '🦄',
    disabled: false,
  },
} satisfies Story;

export const ResetCards = {
  render: () => {
    const [cardLeftShowBack, setCardLeftShowBack] = useState(false);
    const [cardRightShowBack, setCardRightShowBack] = useState(false);

    const handleReset = () => {
      setCardLeftShowBack(true);
      setCardRightShowBack(true);
    }

    return (<div>
      <button className="bg-gray-400 rounded-md p-2 mb-4" onClick={handleReset}>Reset cards</button>
      <div className="flex gap-2">
        <Card initialShowBack={cardLeftShowBack} onClick={() => {}} emoji="🦄" />
        <Card initialShowBack={cardRightShowBack} onClick={() => {}} emoji="🎅" />
      </div>
    </div>);
  }
};

export default meta;