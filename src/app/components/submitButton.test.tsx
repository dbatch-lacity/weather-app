import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SubmitButton from "./submitButton";


describe("SubmitButton Component", () => {
  
  it("should call onSubmit when the button is clicked", () => {
   
    const mockOnSubmit = jest.fn()

   
    const { getByText } = render(<SubmitButton onSubmit={mockOnSubmit} />)

    
    const buttonElement = getByText("Submit")

   
    fireEvent.click(buttonElement)

   
    expect(mockOnSubmit).toHaveBeenCalled()
  });
});
