import { describe, it, expect } from "vitest";
import {
  isAnagramHashTable,
  isAnagramSorting,
  isAnagramHashTableArray,
} from "./solution";

describe("Valid Anagram Solution tests", () => {
  it('Should return true when params are s = "anagram", t = "nagaram"', () => {
    expect(isAnagramHashTable("anagram", "nagaram")).toBeTruthy();
    expect(isAnagramSorting("anagram", "nagaram")).toBeTruthy();
    expect(isAnagramHashTableArray("anagram", "nagaram")).toBeTruthy();
  });

  it('Should return false when params are s = "rat", t = "cat"', () => {
    expect(isAnagramHashTable("rat", "car")).toBeFalsy();
    expect(isAnagramSorting("rat", "car")).toBeFalsy();
    expect(isAnagramHashTableArray("rat", "car")).toBeFalsy();
  });
});
