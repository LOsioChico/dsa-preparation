//> using scala "3.3.1"

package productOfArrayExceptSelf

/**
 * @tag Array; Prefix Sum
 ***************************************************************************
 * Given an integer array nums, return an array answer such that answer[i] 
 * is equal to the product of all the elements of nums except nums[i]. The 
 * product of any prefix or suffix of nums is guaranteed to fit in a 32-bit 
 * integer. You must write an algorithm that runs in O(n) time and without 
 * using the division operation. 
 * 
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 * 
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 * 
 ***************************************************************************
 * { @link https://leetcode.com/problems/product-of-array-except-self/ }
 */

object Solution {
  def productExceptSelf(nums: Array[Int]): Array[Int] = {
    val result = Array.fill(nums.length)(1)

    nums.zipWithIndex.foldLeft(1)((acc, numWithIndex) =>
      val (num, index) = numWithIndex
      result(index) *= acc
      acc * num
    )

    nums.zipWithIndex.foldRight(1)((numWithIndex, acc) => {
      val (num, index) = numWithIndex
      result(index) *= acc
      acc * num
    })

    result
  }
}
