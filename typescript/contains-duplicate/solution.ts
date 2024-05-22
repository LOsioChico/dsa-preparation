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

// [!] Not recommended to submit this one, LT will return `Time Limit Exceeded`
// Quick solution (brute force) - O(n^2) time and O(1) space
// Using nested loops to find the two numbers
export const containsDuplicateNestedLoops = (numbers: number[]): boolean => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) return true;
    }
  }

  return false;
};

// Quick solution (sorting) - O(n * log(n)) time and O(n) space
// Sorting the numbers and check the current and the previous
export const containsDuplicateSorting = (numbers: number[]): boolean => {
  const sortedNumbers = numbers.sort();

  for (let i = 1; i < numbers.length; i++) {
    if (sortedNumbers[i] === sortedNumbers[i - 1]) return true;
  }

  return false;
};

// Best solution (hash table) - O(n) time and O(n) space
// Iterate and check if the numbers is already seen, if not save
// it with a truthy value
export const containsDuplicateHashMap = (numbers: number[]): boolean => {
  const seen = new Map<number, boolean>();

  for (let i = 0; i < numbers.length; i++) {
    if (seen.has(numbers[i])) return true;
    else seen.set(numbers[i], true);
  }

  return false;
};
