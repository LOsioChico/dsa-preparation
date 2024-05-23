//> using scala "3.3.1"
//> using test.dep org.scalatest::scalatest::3.2.18
//> using file practice.scala

import org.scalatest.funspec.AnyFunSpec

class PracticeTests extends AnyFunSpec {
  describe("Practice test") {
    it(
      "Should return Array(0, 3) when the numbers are Array(0, 4, 3, 0) and the target is 0"
    ) {
      val numbers = Array(0, 4, 3, 0);
      val target = 0;
      assert(Practice.twoSum(numbers, target).toList == Array(0, 3).toList)
    }

    it(
      "Should return Array(0, 1) when the numbers are Array(2, 7, 11, 13) and the target is 9"
    ) {
      val numbers = Array(2, 7, 11, 13);
      val target = 9;
      assert(Practice.twoSum(numbers, target).toList == Array(0, 1).toList)
    }

    it(
      "Should return Array(1, 3) when the numbers are Array(13, 7, 11, 2) and the target is 9"
    ) {
      val numbers = Array(13, 7, 11, 2)
      val target = 9
      assert(Practice.twoSum(numbers, target).toList == Array(1, 3).toList)
    }

    it(
      "Should return Array(2, 3) when the numbers are Array(13, 11, 7, 2) and the target is 9"
    ) {
      val numbers = Array(13, 11, 7, 2)
      val target = 9
      assert(Practice.twoSum(numbers, target).toList == Array(2, 3).toList)
    }

    it(
      "Should return Array(0, 1) when the numbers are Array(13, 11, 7, 2) and the target is 24"
    ) {
      val numbers = Array(13, 11, 7, 2)
      val target = 24
      assert(Practice.twoSum(numbers, target).toList == Array(0, 1).toList)
    }

    it(
      "Should return Array(0, 3) when the numbers are Array(13, 11, 7, 2) and the target is 15"
    ) {
      val numbers = Array(13, 11, 7, 2)
      val target = 15
      assert(Practice.twoSum(numbers, target).toList == Array(0, 3).toList)
    }

    it(
      "Should return Array(0, 1) when the numbers are Array(3, 3) and the target is 6"
    ) {
      val numbers = Array(3, 3)
      val target = 6
      assert(Practice.twoSum(numbers, target).toList == Array(0, 1).toList)
    }
  }
}
