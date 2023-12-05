import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SubmitButton from "./submitButton"; // Adjust the import path based on your project structure

// Test suite for the SubmitButton component
describe("SubmitButton Component", () => {
  // Test case: it should call onSubmit when the button is clicked
  it("should call onSubmit when the button is clicked", () => {
    // Mock the onSubmit function
    const mockOnSubmit = jest.fn();

    // Render the SubmitButton component with the mock function
    const { getByText } = render(<SubmitButton onSubmit={mockOnSubmit} />);

    // Get the button element by text content
    const buttonElement = getByText("Submit");

    // Simulate a user clicking the button
    fireEvent.click(buttonElement);

    // Check if onSubmit was called
    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
