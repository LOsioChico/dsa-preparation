/**
 * @tag Array; Hash Table
 ***************************************************************************
 * Given an array of integers, find two numbers such that they add up to
 * a specific target number.
 * The function twoSum should return indices of the two numbers such that
 * they add up to the target, where index1 must be less than index2.
 * Please note that your returned answers (both index1 and index2) are not
 * zero-based.
 *
 * You may assume that each input would have exactly one solution.
 * Input numbers = {2, 7, 11, 15}, target = 9
 * Output index1 = 0, index2 = 1
 *
 ***************************************************************************
 * {@link https://leetcode.com/problems/two-sum/ }
 */

// Fast solution (brute force)
export const twoSumFast = (numbers: number[], target: number) => {
  // Using nested loops to find the two numbers
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
};

// Best solution (hash table)
export const twoSumBest = (numbers: number[], target: number) => {
  // Create a hash table to store the numbers (you can also use an object but it's slower)
  const hashTable = new Map<number, number>();

  // Loop through the numbers
  for (let i = 0; i < numbers.length; i++) {
    // Calculate the remaining number to reach the target
    const remaining = target - numbers[i];

    // If the remaining number is in the hash table, return the indices
    if (hashTable.has(remaining)) {
      return [hashTable.get(remaining)!, i];
    }

    // Otherwise, add the number to the hash table
    hashTable.set(numbers[i], i);
  }
};
