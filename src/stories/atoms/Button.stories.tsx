import type { Meta } from '@storybook/react';

// Components
import { Button } from '../../components/ui/Button/Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export const Default = {
  args: {
    children: "Hello world",
    onClick: () => {},
  },
};

export default meta;