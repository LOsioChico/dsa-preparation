//> using scala "3.3.1"
//> using test.dep org.scalatest::scalatest::3.2.18
//> using file solution.scala

package containsDuplicate

import org.scalatest.funspec.AnyFunSpec

class ContainsDuplicateSolutionTests extends AnyFunSpec {
  describe("Contains Duplicate Solution tests") {
    it(
      "Should return true when the nums are Array(1, 2, 3, 1)"
    ) {
      val nums = Array(1, 2, 3, 1);
      assert(Solution.containsDuplicateNestedLoops(nums) == true)
      assert(Solution.containsDuplicateSorting(nums) == true)
      assert(Solution.containsDuplicateHashTable(nums) == true)
      assert(Solution.containsDuplicateHashSet(nums) == true)
    }

    it(
      "Should return false when the nums are Array(1, 2, 3, 4)"
    ) {
      val nums = Array(1, 2, 3, 4);
      assert(Solution.containsDuplicateNestedLoops(nums) == false)
      assert(Solution.containsDuplicateSorting(nums) == false)
      assert(Solution.containsDuplicateHashTable(nums) == false)
      assert(Solution.containsDuplicateHashSet(nums) == false)
    }

    it(
      "Should return true when the nums are Array(1, 1, 1, 3, 3, 4, 3, 2, 4, 2)"
    ) {
      val nums = Array(1, 1, 1, 3, 3, 4, 3, 2, 4, 2);
      assert(Solution.containsDuplicateNestedLoops(nums) == true)
      assert(Solution.containsDuplicateSorting(nums) == true)
      assert(Solution.containsDuplicateHashTable(nums) == true)
      assert(Solution.containsDuplicateHashSet(nums) == true)
    }
  }

}
