//> using scala "3.3.1"
//> using test.dep org.scalatest::scalatest::3.2.18
//> using file practice.scala

package topKFrequentElements

import org.scalatest.funspec.AnyFunSpec

class TopKFrequentElementsPracticeTests extends AnyFunSpec {
  describe("Top K Frequent Elements Practice tests") {
    it(
      "Should return Array(1, 2) when params are nums = Array(1,1,1,2,2,3), k = 2"
    ) {
      assert(
        Practice.topKFrequent(Array(1, 1, 1, 2, 2, 3), 2).toList == List(1, 2)
      )
    }

    it("Should return Array(1) when params are nums = Array(1), k = 1") {
      assert(Practice.topKFrequent(Array(1), 1).toList == List(1))
    }
  }
}
