import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

import { render, fireEvent, screen } from '@testing-library/react';

// Components
import { Card } from './Card';

describe('Card', () => {
  it('should flip when clicked', () => {
    // arrange
    render(<Card emoji="😀" onClick={vi.fn()} />);

    // act
    fireEvent.click(screen.getByRole('button'));

    // assert
    expect(screen.getByRole('button')).toHaveAttribute('data-state', 'front');

    // act
    fireEvent.click(screen.getByRole('button'));

    // assert
    expect(screen.getByRole('button')).toHaveAttribute('data-state', 'back');
  });

  it('should not flip state when disabled', () => {
    // arrange
    render(<Card emoji="😀" disabled={true} onClick={vi.fn()} />);

    // act
    fireEvent.click(screen.getByRole('button'));

    // assert
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
    expect(screen.getByRole('button')).toHaveAttribute('data-state', 'back');
  });
});