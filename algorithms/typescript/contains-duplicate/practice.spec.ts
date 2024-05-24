import { describe, it, expect } from "vitest";
import containsDuplicate from "./practice";

describe("Contain Duplicates Solution tests", () => {
  it("Should return true when the numbers are [1,2,3,1]", () => {
    const numbers = [1, 2, 3, 1];
    expect(containsDuplicate(numbers)).toBeTruthy();
  });

  it("Should return false when the numbers are [1,2,3,4]", () => {
    const numbers = [1, 2, 3, 4];
    expect(containsDuplicate(numbers)).toBeFalsy();
  });

  it("Should return true when the numbers are [1,1,1,3,3,4,3,2,4,2]", () => {
    const numbers = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    expect(containsDuplicate(numbers)).toBeTruthy();
  });
});
