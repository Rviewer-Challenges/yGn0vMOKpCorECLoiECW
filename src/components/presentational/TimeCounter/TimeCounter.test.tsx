import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import '@testing-library/jest-dom';

// Components
import { TimeCounter } from './TimeCounter';

describe('TimeCounter', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should render with initial counter value', () => {
    render(<TimeCounter />);
    const counterElement = screen.getByText('60');
    expect(counterElement).toBeInTheDocument();
  });

  it('should decrement counter every second', () => {
    render(<TimeCounter />);
    const counterElement = screen.getByText('60');
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(counterElement).toHaveTextContent('59');
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(counterElement).toHaveTextContent('58');
  });

  it('should stop decrementing when counter reaches 0', () => {
    render(<TimeCounter />);
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
});