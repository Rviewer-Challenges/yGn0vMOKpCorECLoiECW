import { render, fireEvent, screen, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
// Components
import { GamePanel } from './GamePanel';

vi.useFakeTimers();

type Props = React.ComponentPropsWithoutRef<typeof GamePanel>;

describe('GamePanel', () => {
  let baseProps: Props;

  beforeEach(() => {
    baseProps = {
      moves: 0,
      remainingPairs: 0,
      onTimeUp: vi.fn(),
      onStartAgain: vi.fn(),
      onShowSolution: vi.fn(),
    };
  });

  const renderUI = (props: Partial<Props> = {}) => {
    return render(<MemoryRouter initialEntries={[`/test?difficulty=easy`]}>
      <GamePanel {...baseProps} {...props} />
    </MemoryRouter>);
  };

  it('should call onStartAgain when restart button is clicked', () => {
    // arrange
    const onStartAgain = vi.fn();
    renderUI({ onStartAgain });

    // act
    fireEvent.click(screen.getByText('🔄 Restart'));

    // assert
    expect(onStartAgain).toHaveBeenCalled();
  });

  it('should call onShowSolution when solution button is clicked', () => {
    // arrange
    const onShowSolution = vi.fn();
    renderUI({ onShowSolution });

    // act
    fireEvent.click(screen.getByText('🔍Solution'));

    // assert
    expect(onShowSolution).toHaveBeenCalled();
  });

  it('should call onTimeUp when the timer reaches 0', () => {
    const onTimeUpMock = vi.fn();
    renderUI({ onTimeUp: onTimeUpMock });

    act(() => {
      vi.advanceTimersByTime(60000);
    });

    expect(onTimeUpMock).toHaveBeenCalledOnce();
  });
});