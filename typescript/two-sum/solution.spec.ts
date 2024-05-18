import { describe, it, expect } from "vitest";
import { twoSumBest, twoSumQuick } from "./solution";


describe("Solution test", () => {
    it("should return [0, 1] when the numbers are [2, 7, 11, 13] and the target is 9", () => {
      const numbers = [2, 7, 11, 13];
      const target = 9;
      expect(twoSumQuick(numbers, target)).toEqual([0, 1]);
      expect(twoSumBest(numbers, target)).toEqual([0, 1]);
    });
  
    it("should return [1, 3] when the numbers are [13, 7, 11, 2] and the target is 9", () => {
      const numbers = [13, 7, 11, 2];
      const target = 9;
      expect(twoSumQuick(numbers, target)).toEqual([1, 3]);
      expect(twoSumBest(numbers, target)).toEqual([1, 3]);
    });
  
    it("should return [2, 3] when the numbers are [13, 11, 7, 2] and the target is 9", () => {
      const numbers = [13, 11, 7, 2];
      const target = 9;
      expect(twoSumQuick(numbers, target)).toEqual([2, 3]);
      expect(twoSumBest(numbers, target)).toEqual([2, 3]);
    });
  
    it("should return [0, 1] when the numbers are [13, 11, 7, 2] and the target is 24", () => {
      const numbers = [13, 11, 7, 2];
      const target = 24;
      expect(twoSumQuick(numbers, target)).toEqual([0, 1]);
      expect(twoSumBest(numbers, target)).toEqual([0, 1]);
    });
  
    it("should return [0, 3] when the numbers are [13, 11, 7, 2] and the target is 15", () => {
      const numbers = [13, 11, 7, 2];
      const target = 15;
      expect(twoSumQuick(numbers, target)).toEqual([0, 3]);
      expect(twoSumBest(numbers, target)).toEqual([0, 3]);
    });
  });