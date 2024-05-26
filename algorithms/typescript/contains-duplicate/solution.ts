/**
 * @tag Array; Hash Table; Sorting
 ***************************************************************************
 * Given an integer array nums, return true if any value appears at least
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

// [!] Not recommended to submit this one, LT return `Time Limit Exceeded`
// Brute Force - O(n^2) time and O(1) space
// Using nested loops to find the the target with the sum of the two nums
export const containsDuplicateNestedLoops = (nums: number[]): boolean => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }

  return false;
};

// Sorting - O(n * log(n)) time and O(n) space
// Sorting the nums and check the current and the previous
export const containsDuplicateSorting = (nums: number[]): boolean => {
  const sortednums = nums.sort();

  for (let i = 1; i < nums.length; i++) {
    if (sortednums[i] === sortednums[i - 1]) return true;
  }

  return false;
};

// Hash Table - O(n) time and O(n) space
// Iterate and check if the nums is already seen, if not save it with a
// truthy value
export const containsDuplicateHashTable = (nums: number[]): boolean => {
  const seen = new Map<number, boolean>();

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) return true;
    else seen.set(nums[i], true);
  }

  return false;
};
