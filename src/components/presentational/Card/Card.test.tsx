import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

import { render, fireEvent, screen, waitFor } from '@testing-library/react';

// Components
import { Card } from './Card';

describe('Card', () => {
  it('should flip when clicked', async() => {
    // arrange
    render(<Card emoji="😀" onClick={vi.fn()} />);

    // act
    fireEvent.click(screen.getByRole('button'));

    // assert
    await waitFor(() => expect(screen.getByRole('button')).toHaveClass('flip-exit-done'));

    // act
    fireEvent.click(screen.getByRole('button'));

    // assert
    await waitFor(() => expect(screen.getByRole('button')).toHaveClass('flip-enter-done'));
  });

  it('should not flip state when disabled', async() => {
    // arrange
    render(<Card emoji="😀" disabled={true}  onClick={vi.fn()} />);

    // act
    fireEvent.click(screen.getByRole('button'));

    // assert
    await waitFor(() => expect(screen.getByRole('button')).toHaveAttribute('disabled'));
    await waitFor(() => expect(screen.getByRole('button')).not.toHaveClass('flip-exit-done'));
    await waitFor(() => expect(screen.getByRole('button')).not.toHaveClass('flip-enter-done'));
  });
});