//> using scala "3.3.1"

package validAnagram

import scala.collection.mutable.HashMap

/**
 * @tag Hash Table; String; Sorting
 ***************************************************************************
 * Given two strings s and t, return true if t is an anagram of s, and 
 * false otherwise. An Anagram is a word or phrase formed by rearranging 
 * the letters of a different word or phrase, typically using all the 
 * original letters exactly once. 
 * 
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 ***************************************************************************
 * { @link https://leetcode.com/problems/valid-anagram/ }
 */

object Solution {
  // Hash Table Two Pass - O(n + n) → O(n) time and O(26) → O(1) space, this
  // is based on constraints, s and t consist of lowercase English letters
  // Iterate every param and save it with counter of letters, then compare
  def isAnagramHashTableTwoPass(s: String, t: String): Boolean = {
    if (s.length == t.length)
      val counterS = HashMap[Char, Int]()
      val counterT = HashMap[Char, Int]()

      for (char <- s) {
        counterS(char) = counterS.get(char).getOrElse(0) + 1
      }
      for (char <- t) {
        counterT(char) = counterT.get(char).getOrElse(0) + 1
      }

      counterS.forall((char, _) =>
        counterS(char) == counterT.get(char).getOrElse(0)
      )
    else false
  }
}
