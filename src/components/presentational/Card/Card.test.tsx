import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

import { render, fireEvent, screen, waitFor } from '@testing-library/react';

// Components
import { Card, CardRefType } from './Card';
import { useRef } from 'react';

describe('Card', () => {
  it('should flip when clicked', async() => {
    // arrange
    render(<Card emoji="😀" />);

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
    render(<Card emoji="😀" disabled={true} />);

    // act
    fireEvent.click(screen.getByRole('button'));

    // assert
    await waitFor(() => expect(screen.getByRole('button')).toHaveAttribute('disabled'));
    await waitFor(() => expect(screen.getByRole('button')).not.toHaveClass('flip-exit-done'));
    await waitFor(() => expect(screen.getByRole('button')).not.toHaveClass('flip-enter-done'));
  });

  it('should reset (face down) when an external element triggers reset', async() => {
    // arrange
    const Wrapper = () => {
      const cardRefLeft = useRef<CardRefType>(null);
      const cardRefRight = useRef<CardRefType>(null);
  
      const handleReset = () => {
        cardRefLeft.current?.reset();
        cardRefRight.current?.reset();
      }
  
      return (<>
        <button data-testid="reset" onClick={handleReset}>Reset card</button>
        <div>
          <Card initialShowBack={false} ref={cardRefLeft} emoji="😀" />
        </div>
      </>);
    }

    render(<Wrapper />);

    // assert
    await waitFor(() => expect(screen.getByText('😀').closest('button')).not.toHaveClass('flip-enter-done'));

    // act
    fireEvent.click(screen.getByTestId('reset'));

    // assert
    await waitFor(() => expect(screen.getByText('😀').closest('button')).toHaveClass('flip-enter-done'));
  });
});