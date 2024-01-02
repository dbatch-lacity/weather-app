import React from 'react'
import Page from './page'
import '@testing-library/jest-dom'
import Home from './page'
import { fireEvent, screen, render } from '@testing-library/react'
jest.mock("next/navigation", () => ({
    useRouter:jest.fn()
  }))

describe("home page", () => {
   //update textbox value on user input
   it("should update textbox value on user input", () => {
    render(<Home />)
    const input = screen.getByRole("textbox")
    fireEvent.change(input,{
        target: {
            value: "12345"
        }
    })
    expect((input as any).value).toBe("12345")
   })
   //button calls handleSubmit when pressed 
   
    
})