//> using scala "3.3.1"

package twoSum

import scala.util.boundary
import scala.collection.mutable

/**
  * @tag Array; Hash Table
  ***************************************************************************
  * Given an array of integers, find two nums such that they add up to a
  * specific target number. The function twoSum should return indices of the
  * two nums such that they add up to the target, where the first must be
  * less than the second.
  *
  * You may assume that each input would have exactly one solution.
  * 
  * Input: nums = (2,7,11,15), target = 9
  * Output: (0,1)
  * Explanation: Because nums(0) + nums(1) == 9, we return (0,1)
  * 
  * Input: nums = (3,2,4), target = 6
  * Output: (1,2)
  * 
  * Input: nums = (3,3), target = 6
  * Output: (0,1)
  *
  * Follow-up: Can you come up with an algorithm that is less than O(n2) time
  * complexity?
  ***************************************************************************
  * { @link https://leetcode.com/problems/two-sum/ }
  */

object Solution {
  // Brute Force - O(n^2) time and O(1) space
  // Using nested loops to find the two nums
  def twoSumNestedLoops(nums: Array[Int], target: Int): Array[Int] = {
    boundary[Array[Int]]:
      for (i <- nums.indices)
        for (j <- Range(i + 1, nums.size))
          if (nums(i) + nums(j) == target) boundary.break(Array(i, j))
      Array.empty
  }

  // Hash Table - O(n) time and O(n) space
  // Iterate and get the remaining value using the current number and the target value,
  // if exist save it with the index
  def twoSumHashTable(nums: Array[Int], target: Int): Array[Int] = {
    val hashTable = new mutable.HashMap[Int, Int]()

    boundary[Array[Int]]:
      for ((num, index) <- nums.zipWithIndex)
        val remaining = target - num

        if (hashTable.contains(remaining))
          boundary.break(Array(hashTable(remaining), index))
        else hashTable.addOne(num, index)

      Array.empty
  }

  // Recursive Hash Table - O(n) + O(n) + O(n) → O(n) time and O(n) space
  def twoSumRecursiveHashTable(nums: Array[Int], target: Int): Array[Int] =
    def findPair(nums: List[(Int, Int)], seen: Map[Int, Int]): Option[Array[Int]] =
      nums match
        case (num, index) :: tail => {
          val complement = target - num
          seen.get(complement) match {
            case Some(complementIndex) => Some(Array(complementIndex, index))
            case None                  => findPair(tail, seen + (num -> index))
          }
        }
        case Nil => None

    findPair(nums.toList.zipWithIndex, Map.empty).getOrElse(Array.empty)
}
