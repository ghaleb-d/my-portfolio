// __tests__/validation.test.ts
import {
    validateName,
    validateEmail,
    validateSubject,
    validateMessage,
  } from "../src/utils/validation";
  
  describe("validation utilities", () => {
    describe("validateName()", () => {
      it("accepts letters and spaces", () => {
        expect(validateName("John Doe")).toBe(true);
        expect(validateName("Émile Zola")).toBe(true);
      });
      it("rejects numbers or symbols", () => {
        expect(validateName("John123")).toBe(false);
        expect(validateName("Jane_Doe")).toBe(false);
      });
    });
  
    describe("validateEmail()", () => {
      it("accepts valid emails", () => {
        expect(validateEmail("foo@bar.com")).toBe(true);
        expect(validateEmail("user.name+tag@example.co.uk")).toBe(true);
      });
      it("rejects invalid emails", () => {
        expect(validateEmail("foo@bar")).toBe(false);
        expect(validateEmail("no-at-symbol.com")).toBe(false);
      });
    });
  
    describe("validateSubject()", () => {
      it("rejects empty or whitespace-only subjects", () => {
        expect(validateSubject("")).toBe(false);
        expect(validateSubject("   ")).toBe(false);
      });
      it("accepts non-empty subjects", () => {
        expect(validateSubject("Hello")).toBe(true);
      });
    });
  
    describe("validateMessage()", () => {
      it("rejects empty or whitespace-only messages", () => {
        expect(validateMessage("")).toBe(false);
        expect(validateMessage("   ")).toBe(false);
      });
      it("accepts non-empty messages", () => {
        expect(validateMessage("This is a test.")).toBe(true);
      });
    });
  });
  