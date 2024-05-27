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

export function isAnagramHashTable(s: string, t: string): boolean {
  if (s.length != t.length) return false;

  const counter = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    counter.set(s[i], (counter.get(s[i]) || 0) + 1);
    counter.set(t[i], (counter.get(t[i]) || 0) - 1);
  }

  return [...counter.values()].every((count) => count === 0);
}

export function isAnagramSorting(s: string, t: string): boolean {
  return s.split("").sort().join("") == t.split("").sort().join("");
}
