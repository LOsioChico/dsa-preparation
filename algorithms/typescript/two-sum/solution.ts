/**
 * @tag Array; Hash Table
 ***************************************************************************
 * Given an array of integers, find two nums such that they add up to a
 * specific target number. The function twoSum should return indices of the two
 * nums such that they add up to the target, where the first must be less
 * than the second.
 *
 * You may assume that each input would have exactly one solution.
 *
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0,1]
 *
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 * Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
 ***************************************************************************
 * { @link https://leetcode.com/problems/two-sum/ }
 */

// Quick solution (brute force) - O(n^2) time and O(1) space
// Using nested loops to find the two nums
export const twoSumNestedLoops = (nums: number[], target: number) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// Best solution (hash table) - O(n) time and O(n) space
// Iterate and get the remaining value using the current number and the target value,
// if exist save it with the index
export const twoSumHashMap = (nums: number[], target: number) => {
  const hashTable = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const remaining = target - nums[i];

    if (hashTable.has(remaining)) {
      return [hashTable.get(remaining)!, i];
    }

    hashTable.set(nums[i], i);
  }
};
