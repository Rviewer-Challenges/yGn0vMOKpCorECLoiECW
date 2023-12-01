
import { describe, expect, test, vi } from 'vitest';
import { renderHook } from '@testing-library/react';

// Components
import { useScreenOrientation } from './useScreenOrientation';

describe('useScreenOrientation', () => {
  test('should get the orientation based on window object value', () => {
    Object.defineProperty(window.screen, 'orientation', {
      value: { type: 'landscape-primary' }
    });

    const { result } = renderHook(() => useScreenOrientation());

    expect(result.current).toBe('landscape');
  });

  test('should get the orientation based on window object value', () => {
    Object.defineProperty(window.screen, 'orientation', {
      value: { type: 'portrait-primary' },
    });

    const { result } = renderHook(() => useScreenOrientation());

    expect(result.current).toBe('portrait');
  });
});