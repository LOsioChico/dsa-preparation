//> using scala "3.3.1"

package containsDuplicate

import scala.util.boundary
import scala.util.boundary.break

/**
 * @tag Array; Hash Table; Sorting
 ***************************************************************************
 * Given an integer array numbers, return true if any value appears at least
 * twice in the array, and return false if every element is distinct.
 *
 * Input: numbers = (1,2,3,1)
 * Output: true
 *
 * Input: numbers = (1,2,3,4)
 * Output: false
 *
 * Input: numbers = (1,1,1,3,3,4,3,2,4,2)
 * Output: true
 *
 ***************************************************************************
 *  { @link https://leetcode.com/problems/contains-duplicate/ }
 */

object Solution {
  // Quick solution (brute force) - O(n^2) time and O(1) space
  // Using nested loops to find the duplicate numbers
  def containsDuplicateNestedLoops(numbers: Array[Int]): Boolean = {
    boundary[Boolean] {
      for (i <- numbers.indices) {
        for (j <- Range(i + 1, numbers.size)) {
          if (numbers(i) == numbers(j)) break(true)
        }
      }

      false
    }
  }

  // Quick solution (sorting) - O(n * log(n)) time and O(n) space
  // Sorting the numbers and check the current and the previous
  def containsDuplicateSorting(numbers: Array[Int]): Boolean = {
    val sortedNumbers = numbers.sorted

    boundary[Boolean] {
      for (i <- Range(1, numbers.size))
        if (sortedNumbers(i - 1) == sortedNumbers(i)) break(true)
      false
    }
  }

  def containsDuplicateHashTable(numbers: Array[Int]): Boolean = ???
}
