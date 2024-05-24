//> using scala "3.3.1"
//> using test.dep org.scalatest::scalatest::3.2.18
//> using file solution.scala

package containsDuplicate

import org.scalatest.funspec.AnyFunSpec

class ContainsDuplicateSolutionTests extends AnyFunSpec {
  describe("Contains Duplicate Solution tests") {
    it(
      "Should return true when the numbers are Array(1, 2, 3, 1)"
    ) {
      val numbers = Array(1, 2, 3, 1);
      assert(Solution.containsDuplicateNestedLoops(numbers) == true)
      assert(Solution.containsDuplicateSorting(numbers) == true)
      assert(Solution.containsDuplicateHashTable(numbers) == true)
    }

    it(
      "Should return false when the numbers are Array(1, 2, 3, 4)"
    ) {
      val numbers = Array(1, 2, 3, 4);
      assert(Solution.containsDuplicateNestedLoops(numbers) == false)
      assert(Solution.containsDuplicateSorting(numbers) == false)
      assert(Solution.containsDuplicateHashTable(numbers) == false)
    }

    it(
      "Should return true when the numbers are Array(1, 1, 1, 3, 3, 4, 3, 2, 4, 2)"
    ) {
      val numbers = Array(1, 1, 1, 3, 3, 4, 3, 2, 4, 2);
      assert(Solution.containsDuplicateNestedLoops(numbers) == true)
      assert(Solution.containsDuplicateSorting(numbers) == true)
      assert(Solution.containsDuplicateHashTable(numbers) == true)
    }
  }

}
