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
  // Hash Table Three Pass - O(3n) → O(n) time and O(26) → O(1) space, this
  // is based on constraints, s and t consist of lowercase English letters
  // Iterate every param and save it with counter of letters, then compare
  def isAnagramHashTableThreePass(s: String, t: String): Boolean = {
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

  // Hash Table Two Pass - O(2n) → O(n) time and O(26) → O(1) space
  // After valid the length iterate with index over both of strings, then
  // increase w/s and decrease w/t the counter based on the char
  def isAnagramHashTableTwoPass(s: String, t: String): Boolean = {
    if (s.length == t.length)
      val counter = HashMap[Char, Int]()

      for (i <- s.indices) {
        counter(s(i)) = counter.get(s(i)).getOrElse(0) + 1
        counter(t(i)) = counter.get(t(i)).getOrElse(0) - 1
      }

      counter.forall((_, count) => count == 0)
    else false
  }

  // Sorting - O(n * log(n)) time and O(2n) → O(n) space
  // After valid the length, sort the strings and check if have the same
  // elements on every position
  def isAnagramSorting(s: String, t: String): Boolean = {
    if (s.length == t.length)
      val (sortedS, sortedT) = (s.sorted, t.sorted)
      s.indices.forall(index => sortedS(index) == sortedT(index))
    else false
  }
}
