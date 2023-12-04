import { getRandomSubarray, shuffleArray } from './array.utils';
import { describe, it, expect } from 'vitest';

describe('getRandomSubarray', () => {
  it('should return a subarray of the specified number of items', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const itemCount = 3;

    const result = getRandomSubarray(array, itemCount);

    expect(result).toHaveLength(itemCount);
    expect(result.every(item => array.includes(item))).toBe(true);
  });

  it('should throw an error if the requested number of items is greater than the array length', () => {
    const array = ['a', 'b', 'c'];
    const itemCount = 4;

    expect(() => getRandomSubarray(array, itemCount)).toThrowError(
      'Number of items requested is greater than the array length.'
    );
  });
});

describe('shuffleArray', () => {
  it('should return a shuffled copy of the original array', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];

    const result = shuffleArray(array);

    expect(result).toHaveLength(array.length);
    expect(result.sort()).toEqual(array.sort());
  });
});