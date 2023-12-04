/**
 * Returns a random subarray of the specified number of items from the given array.
 * Throws an error if the requested number of items is greater than the array length.
 * Uses the Fisher-Yates algorithm to shuffle the array.
 * 
 * @param array - The array from which to extract the subarray.
 * @param itemCount - The number of items to include in the subarray.
 * @returns A random subarray of the specified number of items.
 * @throws Error if the requested number of items is greater than the array length.
 */
export const getRandomSubarray = (array: string[], itemCount: number): string[] => {
  // Check if the requested number of items is greater than the array length
  if (itemCount > array.length) {
    throw new Error("Number of items requested is greater than the array length.");
  }

  const shuffledArray = shuffleArray(array);

  // Return a subarray of the specified number of items
  return shuffledArray.slice(0, itemCount);
}

/**
 * Shuffles an array using the Fisher-Yates algorithm.
 * @param array - The array to be shuffled.
 * @returns The shuffled array.
 */
export const shuffleArray = (array: string[]): string[] => {
  // Make a copy of the original array to avoid modifying it
  const copyArray: string[] = [...array];

  // Shuffle the array using Fisher-Yates algorithm
  for (let i: number = copyArray.length - 1; i > 0; i--) {
    const j: number = Math.floor(Math.random() * (i + 1));
    [copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]];
  }

  return copyArray;
}