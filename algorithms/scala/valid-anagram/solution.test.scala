//> using scala "3.3.1"
//> using test.dep org.scalatest::scalatest::3.2.18
//> using file solution.scala

package validAnagram

import org.scalatest.funspec.AnyFunSpec

class ValidAnagramSolutionTests extends AnyFunSpec {
  describe("Valid Anagram Solution tests") {
    it("Should return true when params are s = \"anagram\", t = \"nagaram\"") {
      assert(Solution.isAnagramHashTableThreePass("anagram", "nagaram") == true)
      assert(Solution.isAnagramHashTableTwoPass("anagram", "nagaram") == true)
      assert(Solution.isAnagramSorting("anagram", "nagaram") == true)
      assert(Solution.isAnagramHashASCII("anagram", "nagaram") == true)
    }

    it("Should return false when params are s = \"rat\", t = \"car\"") {
      assert(Solution.isAnagramHashTableThreePass("rat", "car") == false)
      assert(Solution.isAnagramHashTableTwoPass("rat", "car") == false)
      assert(Solution.isAnagramSorting("rat", "car") == false)
      assert(Solution.isAnagramHashASCII("rat", "car") == false)
    }
  }
}
