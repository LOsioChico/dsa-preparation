import { describe, it, expect } from "vitest";
import isAnagram from "./practice";

describe("Valid Anagram Practice tests", () => {
  it('Should return true when params are s = "anagram", t = "nagaram"', () => {
    expect(isAnagram("anagram", "nagaram")).toBeTruthy();
  });

  it('Should return false when params are s = "rat", t = "cat"', () => {
    expect(isAnagram("rat", "car")).toBeFalsy();
  });
});
