import type { Meta } from '@storybook/react';

// Components
import { Modal } from '../../components/ui/Modal/Modal';

const meta = {
  title: 'Atoms/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export const Default = {
  args: {
    children: "Hello world",
    onClose: () => {},
  },
};

export default meta;