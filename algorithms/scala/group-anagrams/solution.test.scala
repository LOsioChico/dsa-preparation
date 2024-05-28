//> using scala "3.3.1"
//> using test.dep org.scalatest::scalatest::3.2.18
//> using file solution.scala

package groupAnagrams

import org.scalatest.funspec.AnyFunSpec

class GroupAnagramsSolutionTests extends AnyFunSpec {
  describe("Group Anagrams Solution tests") {
    it(
      "Should return [[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]] when params are strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]"
    ) {
      assert(
        (Solution.groupAnagramsHashTable(
          Array("eat", "tea", "tan", "ate", "nat", "bat")
        )) == List(
          List("bat"),
          List("nat", "tan"),
          List("ate", "eat", "tea")
        ) || (Solution.groupAnagramsHashTable(
          Array("eat", "tea", "tan", "ate", "nat", "bat")
        )) == List(
          List("ate", "eat", "tea"),
          List("nat", "tan"),
          List("bat")
        )
      )
    }

    it("Should return [[\"\"]] when params are strs = [\"\"]") {
      assert(Solution.groupAnagramsHashTable(Array("")) == List(List("")))
    }

    it("Should return [[\"a\"]] when params are strs = [[\"a\"]]") {
      assert(Solution.groupAnagramsHashTable(Array("a")) == List(List("a")))
    }

    it(
      "Should return [[\"bbbbbbbbbbc\",\"bdddddddddd\"]] when params are strs = [\"bdddddddddd\",\"bbbbbbbbbbc\"]"
    ) {
      assert(
        Solution.groupAnagramsHashTable(
          Array("bdddddddddd", "bbbbbbbbbbc")
        ) == List(
          List("bbbbbbbbbbc"),
          List("bdddddddddd")
        )
      )
    }
  }
}
