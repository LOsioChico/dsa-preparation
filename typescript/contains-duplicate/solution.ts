/**
 * @tag Array; Hash Table; Sorting
 ***************************************************************************
 * Given an integer array numbers, return true if any value appears at least
 * twice in the array, and return false if every element is distinct.
 *
 * Input: nums = [1,2,3,1]
 * Output: true
 *
 * Input: nums = [1,2,3,4]
 * Output: false
 *
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 *
 ***************************************************************************
 *  { @link https://leetcode.com/problems/contains-duplicate/ }
 */

export const containsDuplicateNestedLoops = (numbers: number[]): boolean => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) return true;
    }
  }

  return false;
};
