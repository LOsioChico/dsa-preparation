//> using scala "3.3.1"

package containsDuplicate

import scala.util.boundary
import scala.util.boundary.break
import scala.collection.mutable.{HashMap, HashSet}

/**
 * @tag Array; Hash Table; Sorting
 ***************************************************************************
 * Given an integer array nums, return true if any value appears at least
 * twice in the array, and return false if every element is distinct.
 *
 * Input: nums = (1,2,3,1)
 * Output: true
 *
 * Input: nums = (1,2,3,4)
 * Output: false
 *
 * Input: nums = (1,1,1,3,3,4,3,2,4,2)
 * Output: true
 *
 ***************************************************************************
 *  { @link https://leetcode.com/problems/contains-duplicate/ }
 */

object Solution {
  // Brute Force - O(n^2) time and O(1) space
  // Using nested loops to find the duplicate nums
  def containsDuplicateNestedLoops(nums: Array[Int]): Boolean = {
    boundary[Boolean]:
      for (i <- nums.indices)
        for (j <- Range(i + 1, nums.size))
          if (nums(i) == nums(j)) break(true)
      false
  }

// Sorting - O(n * log(n)) time and O(1) space
// Sorting the nums and check the current and the previous
  def containsDuplicateSorting(nums: Array[Int]): Boolean = {
    nums.sortInPlace

    boundary[Boolean]:
      for (i <- Range(1, nums.size))
        if (nums(i - 1) == nums(i)) break(true)
      false
  }

// Hash Table - O(n) time and O(n) space
// Iterate and get on the hash map if not exist add it
  def containsDuplicateHashTable(nums: Array[Int]): Boolean = {
    val seen = HashMap[Int, Boolean]()

    nums.find(number =>
      seen.get(number) match
        case Some(_) => true
        case None    => seen.put(number, true); false
    ) != None
  }

// Hash Set - O(n) time and O(n) space
// Iterate and check if was exists or was added on the set
  def containsDuplicateHashSet(nums: Array[Int]): Boolean = {
    val seen = HashSet[Int]()
    nums.find(number => !seen.add(number)) != None
  }
}
