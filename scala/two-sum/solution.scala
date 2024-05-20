//> using scala "2.13.14"

import scala.collection.mutable.HashMap

/** scalafmt: { comments.style = "off"}
  * @tag Array; Hash Table
  ***************************************************************************
  * Given an array of integers, find two numbers such that they add up to a
  * specific target number. The function twoSum should return indices of the two
  * numbers such that they add up to the target, where the first must be less
  * than the second.
  *
  * You may assume that each input would have exactly one solution.
  * 
  * Input: numbers = (2,7,11,15), target = 9
  * Output: (0,1)
  * Explanation: Because numbers(0) + numbers(1) == 9, we return (0,1)
  * 
  * Input: nums = (3,2,4), target = 6
  * Output: (1,2)
  * 
  * Input: nums = (3,3), target = 6
  * Output: (0,1)
  *
  * Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
  ***************************************************************************
  * { @link https://leetcode.com/problems/two-sum/ }
  */

object Solution {
  // Quick solution (brute force) - O(n^2) time and O(1) space
  // Using nested loops to find the two numbers
  def twoSumNestedLoop(numbers: List[Int], target: Int): List[Int] = {
    for (i <- numbers.indices) {
      for (j <- Range(i, numbers.size)) {
        if (numbers(i) + numbers(j) == target) {
          return List(i, j)
        }
      }
    }

    List(0, 0)
  }

  // Best solution (hash table) - O(n) time and O(n) space
  // Iterate and get the remaining value using the current number and the target value,
  // if exist save it with the index
  def twoSumHashMap(numbers: List[Int], target: Int): List[Int] = {
    val hashMap = new HashMap[Int, Int]()

    numbers.zipWithIndex.foreach { case (number, index) =>
      val remaining = target - number

      hashMap.get(remaining) match {
        case Some(value) => return List(value, index)
        case None        => hashMap.addOne(number, index)
      }
    }

    List(0, 0)
  }
}
