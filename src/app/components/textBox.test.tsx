import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TextBox from "./textBox"; // Adjust the import path based on your project structure

// Test suite for the TextBox component
describe("TextBox Component", () => {
  // Test case: it should call onInputChange with the correct value when the input changes
  it("should call onInputChange with the correct value when the input changes", () => {
    // Mock the onInputChange function
    const mockOnInputChange = jest.fn();

    // Render the TextBox component with the mock function
    const { getByPlaceholderText } = render(
      <TextBox onInputChange={mockOnInputChange} />
    );

    // Get the input element by placeholder text
    const inputElement = getByPlaceholderText("Enter US Zipcode");

    // Simulate a user typing into the input
    fireEvent.change(inputElement, { target: { value: "12345" } });

    // Check if onInputChange was called with the correct value
    expect(mockOnInputChange).toHaveBeenCalledWith("12345");
  });
});
