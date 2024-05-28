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
      val assert1 =
        List(List("bat"), List("nat", "tan"), List("ate", "eat", "tea"))
      val assert2 =
        List(List("ate", "eat", "tea"), List("nat", "tan"), List("bat"))
      val assert3 =
        List(List("ate", "eat", "tea"), List("bat"), List("nat", "tan"))
      val result1 = Solution.groupAnagramsHashTable(
        Array("eat", "tea", "tan", "ate", "nat", "bat")
      )
      val result2 = Solution.groupAnagramsHashTableSorting(
        Array("eat", "tea", "tan", "ate", "nat", "bat")
      )

      assert(result1 == assert1 || result1 == assert2 || result1 == assert3)
      assert(result2 == assert1 || result2 == assert2 || result2 == assert3)
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
