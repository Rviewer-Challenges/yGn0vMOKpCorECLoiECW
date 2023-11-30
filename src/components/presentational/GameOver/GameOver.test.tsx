import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

// Components
import { GameOver } from './GameOver';

describe('GameOver', () => {
  it('should call onStartAgain and onClose when Start Again button is clicked', () => {
    const onStartAgainMock = vi.fn();
    const onCloseMock = vi.fn();

    render(<GameOver onStartAgain={onStartAgainMock} onClose={onCloseMock} />);

    const startAgainButton = screen.getByText('Start again 🛸');
    fireEvent.click(startAgainButton);

    expect(onStartAgainMock).toHaveBeenCalled();
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('should call onClose when Close button is clicked', () => {
    const onCloseMock = vi.fn();

    render(<GameOver onStartAgain={vi.fn()} onClose={onCloseMock} />);

    const closeButton = screen.getByText('❌');
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalled();
  });

  it('should render the modal', () => {
    render(<GameOver onStartAgain={vi.fn()} onClose={vi.fn()} />);

    const gameOverText = screen.getByText('Game over 😰');
    const startAgainButton = screen.getByText('Start again 🛸');

    expect(gameOverText).toBeInTheDocument();
    expect(startAgainButton).toBeInTheDocument();
  });
});