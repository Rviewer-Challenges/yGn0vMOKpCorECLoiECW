
import { describe, expect, test, it, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';

// Components
import { useScreenOrientation } from './useScreenOrientation';

describe('useScreenOrientation', () => {
  it('should get the orientation based on window object value (landscape)', () => {
    global.innerHeight = 200;
    global.innerWidth = 300;

    const { result } = renderHook(() => useScreenOrientation());

    expect(result.current).toBe('landscape');
  });

  it('should get the orientation based on window object value (portrait)', () => {
    global.innerHeight = 300;
    global.innerWidth = 200;

    const { result } = renderHook(() => useScreenOrientation());

    expect(result.current).toBe('portrait');
  });
});