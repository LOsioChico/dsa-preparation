import { describe, it, expect } from "vitest";
import {
  containsDuplicateHashMap,
  containsDuplicateNestedLoops,
  containsDuplicateSorting,
} from "./solution";

describe("Contains Duplicate Solution tests", () => {
  it("Should return true when the numbers are [1, 2, 3, 1]", () => {
    const numbers = [1, 2, 3, 1];
    expect(containsDuplicateNestedLoops(numbers)).toBeTruthy();
    expect(containsDuplicateSorting(numbers)).toBeTruthy();
    expect(containsDuplicateHashMap(numbers)).toBeTruthy();
  });

  it("Should return false when the numbers are [1, 2, 3, 4]", () => {
    const numbers = [1, 2, 3, 4];
    expect(containsDuplicateNestedLoops(numbers)).toBeFalsy();
    expect(containsDuplicateSorting(numbers)).toBeFalsy();
    expect(containsDuplicateHashMap(numbers)).toBeFalsy();
  });

  it("Should return true when the numbers are [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]", () => {
    const numbers = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    expect(containsDuplicateNestedLoops(numbers)).toBeTruthy();
    expect(containsDuplicateSorting(numbers)).toBeTruthy();
    expect(containsDuplicateHashMap(numbers)).toBeTruthy();
  });
});
