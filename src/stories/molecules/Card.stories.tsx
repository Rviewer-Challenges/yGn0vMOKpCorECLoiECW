import { useRef } from "react";
import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Card, CardRefType } from "../../components/presentational/Card/Card";

const meta = {
  title: 'Molecules/Card',
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
    const cardRefLeft = useRef<CardRefType>(null);
    const cardRefRight = useRef<CardRefType>(null);

    const handleReset = () => {
      cardRefLeft.current?.reset();
      cardRefRight.current?.reset();
    }

    return (<div>
      <button className="bg-gray-400 rounded-md p-2 mb-4" onClick={handleReset}>Reset cards</button>
      <div className="grid grid-cols-2 h-56 w-full" style={{
        gridTemplateRows: '12rem',
        gridTemplateColumns: '12rem 12rem',
        gap: '1rem',
      }}>
        <Card initialShowBack={false} ref={cardRefLeft} emoji="🦄" />
        <Card initialShowBack={false} ref={cardRefRight} emoji="🎅" />
      </div>
    </div>);
  }
};

export default meta;