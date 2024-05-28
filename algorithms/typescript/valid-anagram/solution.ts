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

// Hash Table Two Pass - O(2n) → O(n) time and O(26) → O(1) space
// After valid the length iterate with index over both of strings, then
// increase w/s and decrease w/t the counter based on the char
export function isAnagramHashTable(s: string, t: string): boolean {
  if (s.length != t.length) return false;

  const counter = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    counter.set(s[i], (counter.get(s[i]) || 0) + 1);
    counter.set(t[i], (counter.get(t[i]) || 0) - 1);
  }

  return [...counter.values()].every((count) => count === 0);
}

// Sorting - O(n * log(n)) time and O(1) space
// Sort the strings and check if have the same elements
export function isAnagramSorting(s: string, t: string): boolean {
  return s.split("").sort().join("") == t.split("").sort().join("");
}

// Hash Table Array - O(2n) → O(n) time and O(26 * 26) → O(1) space
// After valid the length, make the hashes basing on the contraint
// the says, s and t consist of lowercase English letters so is 26,
// then, this is not zero based so we need to decrease the 'a' char
// that is the first value, then increase count based on index
export function isAnagramHashTableArray(s: string, t: string): boolean {
  if (s.length != t.length) return false;

  const hash = Array(26).fill(0);
  const toIndex = (char: string) => char.charCodeAt(0) - "a".charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    hash[toIndex(s[i])]++;
    hash[toIndex(t[i])]--;
  }

  return hash.every((count) => count === 0);
}
