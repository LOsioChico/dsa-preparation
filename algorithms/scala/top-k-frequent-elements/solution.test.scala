//> using scala "3.3.1"
//> using test.dep org.scalatest::scalatest::3.2.18
//> using file solution.scala

package topKFrequentElements

import org.scalatest.funspec.AnyFunSpec

class TopKFrequentElementsSolutionTests extends AnyFunSpec {
  describe("Top K Frequent Elements Solution tests") {
    it(
      "Should return Array(1, 2) when params are nums = Array(1,1,1,2,2,3), k = 2"
    ) {
      assert(
        Solution
          .topKFrequentHashMapFreq(Array(1, 1, 1, 2, 2, 3), 2)
          .toList == List(1, 2)
      )
    }

    it("Should return Array(1) when params are nums = Array(1), k = 1") {
      assert(Solution.topKFrequentHashMapFreq(Array(1), 1).toList == List(1))
    }
  }
}
