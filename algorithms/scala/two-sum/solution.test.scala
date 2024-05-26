//> using scala "3.3.1"
//> using test.dep org.scalatest::scalatest::3.2.18
//> using file solution.scala

package twoSum

import org.scalatest.funspec.AnyFunSpec

class TwoSumSolutionTests extends AnyFunSpec {
  describe("Two Sum Solution tests") {
    it(
      "Should return Array(0, 3) when the nums are Array(0, 4, 3, 0) and the target is 0"
    ) {
      val nums = Array(0, 4, 3, 0);
      val target = 0;
      assert(Solution.twoSumNestedLoops(nums, target).toList == List(0, 3))
      assert(Solution.twoSumHashTable(nums, target).toList == List(0, 3))
    }

    it(
      "Should return Array(0, 1) when the nums are Array(2, 7, 11, 13) and the target is 9"
    ) {
      val nums = Array(2, 7, 11, 13);
      val target = 9;
      assert(Solution.twoSumNestedLoops(nums, target).toList == List(0, 1))
      assert(Solution.twoSumHashTable(nums, target).toList == List(0, 1))
    }

    it(
      "Should return Array(1, 3) when the nums are Array(13, 7, 11, 2) and the target is 9"
    ) {
      val nums = Array(13, 7, 11, 2)
      val target = 9
      assert(Solution.twoSumNestedLoops(nums, target).toList == List(1, 3))
      assert(Solution.twoSumHashTable(nums, target).toList == List(1, 3))
    }

    it(
      "Should return Array(2, 3) when the nums are Array(13, 11, 7, 2) and the target is 9"
    ) {
      val nums = Array(13, 11, 7, 2)
      val target = 9
      assert(Solution.twoSumNestedLoops(nums, target).toList == List(2, 3))
      assert(Solution.twoSumHashTable(nums, target).toList == List(2, 3))
    }

    it(
      "Should return Array(0, 1) when the nums are Array(13, 11, 7, 2) and the target is 24"
    ) {
      val nums = Array(13, 11, 7, 2)
      val target = 24
      assert(Solution.twoSumNestedLoops(nums, target).toList == List(0, 1))
      assert(Solution.twoSumHashTable(nums, target).toList == List(0, 1))
    }

    it(
      "Should return Array(0, 3) when the nums are Array(13, 11, 7, 2) and the target is 15"
    ) {
      val nums = Array(13, 11, 7, 2)
      val target = 15
      assert(Solution.twoSumNestedLoops(nums, target).toList == List(0, 3))
      assert(Solution.twoSumHashTable(nums, target).toList == List(0, 3))
    }

    it(
      "Should return Array(0, 1) when the nums are Array(3, 3) and the target is 6"
    ) {
      val nums = Array(3, 3)
      val target = 6
      assert(Solution.twoSumNestedLoops(nums, target).toList == List(0, 1))
      assert(Solution.twoSumHashTable(nums, target).toList == List(0, 1))
    }

    it(
      "Should return Array(4, 11) when the nums are Array(1,1,1,1,1,4,1,1,1,1,1,7,1,1,1,1,1) and the target is 11"
    ) {
      val nums = Array(1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1)
      val target = 11
      assert(Solution.twoSumNestedLoops(nums, target).toList == List(5, 11))
      assert(Solution.twoSumHashTable(nums, target).toList == List(5, 11))
    }
  }
}
