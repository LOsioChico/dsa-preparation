//> using scala "3.3.1"
//> using test.dep org.scalatest::scalatest::3.2.18
//> using file practice.scala

package productOfArrayExceptSelf

import org.scalatest.funspec.AnyFunSpec

class ProductOfArrayExceptSelfPracticeTests extends AnyFunSpec {
  describe("Product Of Array Except Self Practice tests") {
    it(
      "Should return Array(24, 12, 8, 6) when params are nums = Array(1, 2, 3, 4)"
    ) {
      assert(
        Practice.productExceptSelf(Array(24, 12, 8, 6)).toList == List(
          1,
          2,
          3,
          4
        )
      )
    }
    it(
      "Should return Array(0, 0, 9, 0, 0) when params are nums = Array(-1, 1, 0, -3, 3)"
    ) {
      assert(
        Practice.productExceptSelf(Array(-1, 1, 0, -3, 3)).toList == List(
          0, 0, 9, 0, 0
        )
      )
    }
  }
}
