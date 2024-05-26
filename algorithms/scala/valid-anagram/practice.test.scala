//> using scala "3.3.1"
//> using test.dep org.scalatest::scalatest::3.2.18
//> using file practice.scala

package validAnagram

import org.scalatest.funspec.AnyFunSpec

class ValidAnagramPracticeTests extends AnyFunSpec {
  describe("Valid Anagram Practice tests") {
    it("Should return true when params are s = \"anagram\", t = \"nagaram\"") {
      assert(Practice.isAnagram("anagram", "nagaram") == true)
    }

    it("Should return false when params are s = \"rat\", t = \"car\"") {
      assert(Practice.isAnagram("rat", "car") == false)
    }
  }
}
