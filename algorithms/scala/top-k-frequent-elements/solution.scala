//> using scala "3.3.1"

package topKFrequentElements

import scala.collection.mutable
import scala.util.boundary
import scala.util.boundary.break

/**
 * @tag Array; Hash Table; Divide and Conquer; Sorting; Heap (Priority Queue); Bucket Sort; Counting; Quickselect
 ***************************************************************************
 * Given an integer array nums and an integer k, return the k most 
 * frequent elements. You may return the answer in any order. 
 * 
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 * 
 * Input: nums = [1], k = 1
 * Output: [1]
 * 
 ***************************************************************************
 * { @link https://leetcode.com/problems/top-k-frequent-elements/ }
 */

object Solution {
  // Hash Map Freq - O(n) time and O(n) space
  // Iterate the nums and save on a Hash Table counter the number and count,
  // then iterate over this Hash Table and save on a Array Freq using count
  // as index and append to the Array the number, then return right to left
  // numbers found
  def topKFrequentHashMapFreq(nums: Array[Int], k: Int): Array[Int] = {
    val freq = Array.fill(nums.length + 1)(Array.empty[Int])
    val counter = mutable.HashMap[Int, Int]()

    for (num <- nums) counter(num) = counter.getOrElse(num, 0) + 1
    for (count <- counter) freq(count._2) = freq(count._2) appended count._1

    var result = Array.empty[Int]
    boundary[Unit]:
      for (i <- freq.length - 1 to 1 by -1)
        for (num <- freq(i)) result = result appended num
        if (result.length == k) break()
    result
  }
}
