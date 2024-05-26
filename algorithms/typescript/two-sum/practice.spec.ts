import { describe, it, expect } from "vitest";
import twoSum from "./practice";

describe("Two Sum Practice tests", () => {
  it("Should return [0, 3] when the nums are [0, 4, 3, 0] and the target is 0", () => {
    const nums = [0, 4, 3, 0];
    const target = 0;
    expect(twoSum(nums, target)).toEqual([0, 3]);
  });

  it("should return [0, 1] when the nums are [2, 7, 11, 13] and the target is 9", () => {
    const nums = [2, 7, 11, 13];
    const target = 9;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  it("should return [1, 3] when the nums are [13, 7, 11, 2] and the target is 9", () => {
    const nums = [13, 7, 11, 2];
    const target = 9;
    expect(twoSum(nums, target)).toEqual([1, 3]);
  });

  it("should return [2, 3] when the nums are [13, 11, 7, 2] and the target is 9", () => {
    const nums = [13, 11, 7, 2];
    const target = 9;
    expect(twoSum(nums, target)).toEqual([2, 3]);
  });

  it("should return [0, 1] when the nums are [13, 11, 7, 2] and the target is 24", () => {
    const nums = [13, 11, 7, 2];
    const target = 24;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  it("should return [0, 3] when the nums are [13, 11, 7, 2] and the target is 15", () => {
    const nums = [13, 11, 7, 2];
    const target = 15;
    expect(twoSum(nums, target)).toEqual([0, 3]);
  });

  it("Should return [0, 1] when the nums are [3, 3] and the target is 6", () => {
    const nums = [3, 3];
    const target = 6;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  it("Should return [4, 11] when the nums are [1,1,1,1,1,4,1,1,1,1,1,7,1,1,1,1,1] and the target is 11", () => {
    const nums = [1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1];
    const target = 11;
    expect(twoSum(nums, target)).toEqual([4, 11]);
  });
});
