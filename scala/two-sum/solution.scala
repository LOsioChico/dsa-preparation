//> using scala "2.13.14"

import scala.collection.mutable.HashMap

/** @tag
  *   Array; Hash Table
  *
  * Given an array of integers, find two numbers such that they add up to a
  * specific target number. The function twoSum should return indices of the two
  * numbers such that they add up to the target, where index1 must be less than
  * index2. Please note that your returned answers (both index1 and index2) are
  * not zero-based.
  *
  * You may assume that each input would have exactly one solution. Input
  * numbers = { 2, 7, 11, 15 }, target = 9 Output [0, 1]
  *
  * @link
  *   https://leetcode.com/problems/two-sum/
  */

object Solution {
  // Quick solution (brute force) - O(n^2) and O(1) space
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

  // Best solution (hash table) - O(n) and O(n) space
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
