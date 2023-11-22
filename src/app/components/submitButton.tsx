'use client'
import React from 'react'

interface SubmitButtonProps {
  onSubmit: () => void
}

const submitButton: React.FC<SubmitButtonProps> = ({onSubmit}) => {
  return  <button onClick={onSubmit}>Submit</button>
}

export default submitButton