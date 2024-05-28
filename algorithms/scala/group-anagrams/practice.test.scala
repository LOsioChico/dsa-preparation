//> using scala "3.3.1"
//> using test.dep org.scalatest::scalatest::3.2.18
//> using file practice.scala

package groupAnagrams

import org.scalatest.funspec.AnyFunSpec

class GroupAnagramsPracticeTests extends AnyFunSpec {
  describe("Group Anagrams Practice tests") {
    it(
      "Should return [[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]] when params are strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]"
    ) {
      assert(
        Practice.groupAnagrams(
          Array("eat", "tea", "tan", "ate", "nat", "bat")
        ) == List(List("bat"), List("nat", "tan"), List("ate", "eat", "tea"))
      )
    }

    it("Should return [[\"\"]] when params are strs = [\"\"]") {
      assert(Practice.groupAnagrams(Array("")) == List(List("")))
    }

    it("Should return [[\"a\"]] when params are strs = [[\"a\"]]") {
      assert(Practice.groupAnagrams(Array("a")) == List(List("a")))
    }
  }
}
