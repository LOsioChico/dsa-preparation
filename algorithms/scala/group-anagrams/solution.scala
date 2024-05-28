//> using scala "3.3.1"

package groupAnagrams

import scala.collection.mutable.HashMap

/**
 * @tag Array; Hash Table; String; Sorting
 ***************************************************************************
 * Given an array of strings strs, group the anagrams together. You can 
 * return the answer in any order. An Anagram is a word or phrase formed by 
 * rearranging the letters of a different word or phrase, typically using 
 * all the original letters exactly once. 
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * Input: strs = [""]
 * Output: [[""]]
 * 
 * Input: strs = [["a"]]
 * Output: [["a"]]
 * 
 ***************************************************************************
 * { @link https://leetcode.com/problems/group-anagrams/ }
 */

object Solution {
  // Hash Table - O(n * m) time and O(m * n * 26) → O(m * n) space
  // Iterate the strings, make the hash array and update it based on the
  // char value, then update the hash table based on the hash array
  def groupAnagramsHashTable(strs: Array[String]): List[List[String]] = {
    val hashTable = HashMap[String, List[String]]()
    def toIndex = (char: Char) => char.toInt - 'a'.toInt

    strs.foreach(str => {
      val hash = Array.fill(26)(0)
      str.foreach(char => hash(toIndex(char)) += 1)
      hashTable.update(
        hash.mkString(","),
        hashTable.getOrElse(hash.mkString(","), List()).appended(str)
      )
    })

    // The sort not should be needed but LT want this alphabetic, so
    hashTable.values.toList.map(str => str.sorted)
  }

  // Hash Table Sorting - O(n * m * log(m)) time and O(m * n * 26) → O(m * n) space
  // Iterate the strings, then update the hash table based on the string sorted
  def groupAnagramsHashTableSorting(strs: Array[String]): List[List[String]] = {
    val hashTable = HashMap[String, List[String]]()

    strs.foreach(str =>
      hashTable.update(
        str.sorted,
        hashTable.getOrElse(str.sorted, List()).prepended(str)
      )
    )

    // The sort not should be needed but LT want this alphabetic, so
    hashTable.values.toList.map(str => str.sorted)
  }
}
