import { describe, it, expect } from "vitest";
import containsDuplicate from "./practice";

describe("Contain Duplicates Solution tests", () => {
  it("Should return true when the nums are [1, 2, 3, 1]", () => {
    const nums = [1, 2, 3, 1];
    expect(containsDuplicate(nums)).toBeTruthy();
  });

  it("Should return false when the nums are [1, 2, 3, 4]", () => {
    const nums = [1, 2, 3, 4];
    expect(containsDuplicate(nums)).toBeFalsy();
  });

  it("Should return true when the nums are [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]", () => {
    const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    expect(containsDuplicate(nums)).toBeTruthy();
  });
});
