import { describe, it, expect } from "vitest";
import { twoSumNestedLoops, twoSumHashMap } from "./solution";

describe("Two Sum Solution tests", () => {
  it("Should return [0, 3] when the numbers are [0, 4, 3, 0] and the target is 0", () => {
    const numbers = [0, 4, 3, 0];
    const target = 0;
    expect(twoSumNestedLoops(numbers, target)).toEqual([0, 3]);
    expect(twoSumHashMap(numbers, target)).toEqual([0, 3]);
  });

  it("Should return [0, 1] when the numbers are [2, 7, 11, 13] and the target is 9", () => {
    const numbers = [2, 7, 11, 13];
    const target = 9;
    expect(twoSumNestedLoops(numbers, target)).toEqual([0, 1]);
    expect(twoSumHashMap(numbers, target)).toEqual([0, 1]);
  });

  it("Should return [1, 3] when the numbers are [13, 7, 11, 2] and the target is 9", () => {
    const numbers = [13, 7, 11, 2];
    const target = 9;
    expect(twoSumNestedLoops(numbers, target)).toEqual([1, 3]);
    expect(twoSumHashMap(numbers, target)).toEqual([1, 3]);
  });

  it("Should return [2, 3] when the numbers are [13, 11, 7, 2] and the target is 9", () => {
    const numbers = [13, 11, 7, 2];
    const target = 9;
    expect(twoSumNestedLoops(numbers, target)).toEqual([2, 3]);
    expect(twoSumHashMap(numbers, target)).toEqual([2, 3]);
  });

  it("Should return [0, 1] when the numbers are [13, 11, 7, 2] and the target is 24", () => {
    const numbers = [13, 11, 7, 2];
    const target = 24;
    expect(twoSumNestedLoops(numbers, target)).toEqual([0, 1]);
    expect(twoSumHashMap(numbers, target)).toEqual([0, 1]);
  });

  it("Should return [0, 3] when the numbers are [13, 11, 7, 2] and the target is 15", () => {
    const numbers = [13, 11, 7, 2];
    const target = 15;
    expect(twoSumNestedLoops(numbers, target)).toEqual([0, 3]);
    expect(twoSumHashMap(numbers, target)).toEqual([0, 3]);
  });
});
