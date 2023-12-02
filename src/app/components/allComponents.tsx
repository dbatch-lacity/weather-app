"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import TextBox from "./textBox";
import SubmitButton from "./submitButton";

export function validateZipCode(zipCode: string): boolean {
  //5 digits
  if (zipCode.length != 5) {
    return false;
  }
  //number
  //no other characters besides numbers
  if (isNaN(Number(zipCode))) {
    return false;
  }
  const numInput = Number(zipCode);
  //no spaces
  //no leading zeros
  if (numInput % 1 != 0 || numInput <= 0 || numInput.toString().length != 5) {
    return false;
  }
  return true;
}

export const AllComponents: React.FC = () => {
  const [zipCode, setZipCode] = useState<string>("");

  const router = useRouter();

  const handleInputChange = (value: string) => {
    setZipCode(value);
  };

  const handleSubmit = async () => {
    try {
      console.log("button is working");
      if (!validateZipCode(zipCode)) {
        alert("You entered an invalid zipcode");
      } else {
        router.push(`../displayPage?zipCode=${zipCode}`);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div>
      <div>
        <TextBox onInputChange={handleInputChange} />
      </div>
      <div>
        <SubmitButton onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AllComponents;
