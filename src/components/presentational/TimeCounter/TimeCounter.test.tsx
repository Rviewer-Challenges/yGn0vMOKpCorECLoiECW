import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import '@testing-library/jest-dom';

// Components
import { TimeCounter, TimeCounterRefType } from './TimeCounter';
import { useRef } from 'react';

vi.useFakeTimers(); // Mock timers

describe('TimeCounter', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should render with initial counter value', () => {
    render(<TimeCounter onTimeUp={vi.fn()} />);
    const counterElement = screen.getByText('60');
    expect(counterElement).toBeInTheDocument();
  });

  it('should decrement counter every second', () => {
    render(<TimeCounter onTimeUp={vi.fn()} />);

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(screen.getByTestId('time-counter')).toHaveTextContent('59');
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(screen.getByTestId('time-counter')).toHaveTextContent('58');
  });

  it('should stop decrementing when counter reaches 0', () => {
    // arrange
    render(<TimeCounter onTimeUp={vi.fn()} />);
    const counterElement = screen.getByText('60');
    act(() => {
      vi.advanceTimersByTime(60000);
    });
    expect(counterElement).toHaveTextContent('0');
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(counterElement).toHaveTextContent('0');
  });

  it('should call onTimeUp when the timer reaches 0', () => {
    const onTimeUpMock = vi.fn();
    render(<TimeCounter onTimeUp={onTimeUpMock} />);

    act(() => {
      vi.advanceTimersByTime(60000);
    });

    expect(onTimeUpMock).toHaveBeenCalledOnce();
  });

  it('should restart the countdown when restartCountdown is called', () => {
    const Wrapper = () => {
      const componentRef = useRef<TimeCounterRefType>(null);
  
      const handleRestart = () => {
        componentRef.current?.restartCountdown();
      }
  
      return (<>
        <button data-testid="restart" onClick={handleRestart}>Restart timer</button>
        <div>
          <TimeCounter ref={componentRef} onTimeUp={vi.fn()} />
        </div>
      </>);
    }

    render(<Wrapper />);

    expect(screen.getByTestId('time-counter')).toHaveTextContent('60');

    act(() => {
      vi.advanceTimersByTime(10000);
    });

    expect(screen.getByTestId('time-counter')).toHaveTextContent('50');

    act(() => {
      screen.getByTestId('restart').click();
    });

    expect(screen.getByTestId('time-counter')).toHaveTextContent('60');
  });

  it('should stop the countdown when stop is called', async() => {
    const Wrapper = () => {
      const componentRef = useRef<TimeCounterRefType>(null);
  
      const handleStop = () => {
        componentRef.current?.stop();
      }
  
      return (<>
        <button data-testid="stop" onClick={handleStop}>Restart timer</button>
        <div>
          <TimeCounter ref={componentRef} onTimeUp={vi.fn()} />
        </div>
      </>);
    }

    render(<Wrapper />);

    expect(screen.getByTestId('time-counter')).toHaveTextContent('60');

    screen.getByTestId('stop').click();

    expect(screen.getByTestId('time-counter')).toHaveTextContent('0');
  });
});