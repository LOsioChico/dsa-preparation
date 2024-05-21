//> using scala "2.13.14"
//> using test.dep org.scalatest::scalatest::3.2.18
//> using file solution.scala

import org.scalatest.funspec.AnyFunSpec

class SolutionTests extends AnyFunSpec {
  describe("Solution test") {
    it(
      "Should return List(0, 1) when the numbers are List(2, 7, 11, 13) and the target is 9"
    ) {
      val numbers = List(2, 7, 11, 13);
      val target = 9;
      assert(Solution.twoSumNestedLoop(numbers, target) == List(0, 1))
      assert(Solution.twoSumHashMap(numbers, target) == List(0, 1))
    }

    it(
      "Should return List(1, 3) when the numbers are List(13, 7, 11, 2) and the target is 9"
    ) {
      val numbers = List(13, 7, 11, 2)
      val target = 9
      assert(Solution.twoSumNestedLoop(numbers, target) == List(1, 3))
      assert(Solution.twoSumHashMap(numbers, target) == List(1, 3))
    }

    it(
      "Should return List(2, 3) when the numbers are List(13, 11, 7, 2) and the target is 9"
    ) {
      val numbers = List(13, 11, 7, 2)
      val target = 9
      assert(Solution.twoSumNestedLoop(numbers, target) == List(2, 3))
      assert(Solution.twoSumHashMap(numbers, target) == List(2, 3))
    }

    it(
      "Should return List(0, 1) when the numbers are List(13, 11, 7, 2) and the target is 24"
    ) {
      val numbers = List(13, 11, 7, 2)
      val target = 24
      assert(Solution.twoSumNestedLoop(numbers, target) == List(0, 1))
      assert(Solution.twoSumHashMap(numbers, target) == List(0, 1))
    }

    it(
      "Should return List(0, 3) when the numbers are List(13, 11, 7, 2) and the target is 15"
    ) {
      val numbers = List(13, 11, 7, 2)
      val target = 15
      assert(Solution.twoSumNestedLoop(numbers, target) == List(0, 3))
      assert(Solution.twoSumHashMap(numbers, target) == List(0, 3))
    }
  }
}
