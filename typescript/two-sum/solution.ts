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
 * Input numbers = { 2, 7, 11, 15 }, target = 9
 * Output [0, 1]
 *
 ***************************************************************************
 * {@link https://leetcode.com/problems/two-sum/ }
 */

// Quick solution (brute force)
// Using nested loops to find the two numbers
export const twoSumQuick = (numbers: number[], target: number) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
};

// Best solution (hash table)
// Iterate and get the remaining value using the current number and the target value,
// if exist save it with the index
export const twoSumBest = (numbers: number[], target: number) => {
  const hashTable = new Map<number, number>();

  for (let i = 0; i < numbers.length; i++) {
    const remaining = target - numbers[i];

    if (hashTable.has(remaining)) {
      return [hashTable.get(remaining)!, i];
    }

    hashTable.set(numbers[i], i);
  }
};
