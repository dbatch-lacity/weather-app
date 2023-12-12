import {validateZipCode} from "./validateZipCode"

describe("validate zipcode", () => {
    it("should return true for valid zipcode", () => {
      const input: string = "90012";
      expect(validateZipCode(input)).toBe(true);
    });
  
    it("should return true for valid zipcode", () => {
      const input: string = "91910";
      expect(validateZipCode(input)).toBe(true);
    });
  
    it("should return false for invalid zipcode", () => {
      const input: string = "952";
      expect(validateZipCode(input)).toBe(false);
    });
  
    it("should return false for invalid zipcode", () => {
      const input: string = "Markd";
      expect(validateZipCode(input)).toBe(false);
    });
  
    it("should return false for invalid zipcode", () => {
      const input: string = "10.01";
      expect(validateZipCode(input)).toBe(false);
    });
  
    it("should return false for invalid zipcode", () => {
      const input: string = "01000";
      expect(validateZipCode(input)).toBe(false);
    });
  
    it("should return false for invalid zipcode", () => {
      const input: string = "00000";
      expect(validateZipCode(input)).toBe(false);
    });
  
    it("should return false for invalid zipcode", () => {
      const input: string = "-1001";
      expect(validateZipCode(input)).toBe(false);
    });
  
    it("should return false for invalid zipcode", () => {
      const input: string = "10 01";
      expect(validateZipCode(input)).toBe(false);
    });
  });
  