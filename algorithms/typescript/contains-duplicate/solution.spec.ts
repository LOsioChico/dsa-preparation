import { describe, it, expect } from "vitest";
import {
  containsDuplicateHashTable,
  containsDuplicateNestedLoops,
  containsDuplicateSorting,
  containsDuplicateHashSet,
} from "./solution";

describe("Contains Duplicate Solution tests", () => {
  it("Should return true when the nums are [1, 2, 3, 1]", () => {
    const nums = [1, 2, 3, 1];
    expect(containsDuplicateNestedLoops(nums)).toBeTruthy();
    expect(containsDuplicateSorting(nums)).toBeTruthy();
    expect(containsDuplicateHashTable(nums)).toBeTruthy();
    expect(containsDuplicateHashSet(nums)).toBeTruthy();
  });

  it("Should return false when the nums are [1, 2, 3, 4]", () => {
    const nums = [1, 2, 3, 4];
    expect(containsDuplicateNestedLoops(nums)).toBeFalsy();
    expect(containsDuplicateSorting(nums)).toBeFalsy();
    expect(containsDuplicateHashTable(nums)).toBeFalsy();
    expect(containsDuplicateHashSet(nums)).toBeFalsy();
  });

  it("Should return true when the nums are [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]", () => {
    const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    expect(containsDuplicateNestedLoops(nums)).toBeTruthy();
    expect(containsDuplicateSorting(nums)).toBeTruthy();
    expect(containsDuplicateHashTable(nums)).toBeTruthy();
    expect(containsDuplicateHashSet(nums)).toBeTruthy();
  });
});
