//> using scala "3.3.1"
//> using test.dep org.scalatest::scalatest::3.2.18
//> using file practice.scala

package containsDuplicate

import org.scalatest.funspec.AnyFunSpec

class ContainsDuplicatePracticeTests extends AnyFunSpec {
  describe("Contains Duplicate Practice tests") {
    it("Should return true when the nums are Array(1, 2, 3, 1)") {
      val nums = Array(1, 2, 3, 1);
      assert(Practice.containsDuplicate(nums) == true)
    }

    it("Should return false when the nums are Array(1, 2, 3, 4)") {
      val nums = Array(1, 2, 3, 4);
      assert(Practice.containsDuplicate(nums) == false)
    }

    it(
      "Should return true when the nums are Array(1, 1, 1, 3, 3, 4, 3, 2, 4, 2)"
    ) {
      val nums = Array(1, 1, 1, 3, 3, 4, 3, 2, 4, 2);
      assert(Practice.containsDuplicate(nums) == true)
    }
  }
}
