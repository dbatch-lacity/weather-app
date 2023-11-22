'use client'
import React from 'react'

interface TextBoxProps {
  onInputChange: (value: string) => void;
}

const textBox: React.FC<TextBoxProps> = ({onInputChange}) => {
  return (
    
        <input  type="text" placeholder="Enter US Zipcode" maxLength={5} onChange={(e) => onInputChange(e.target.value)}/>
    
  )
}

export default textBox