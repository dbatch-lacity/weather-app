"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import TextBox from "./textBox";
import SubmitButton from "./submitButton";
import { validateZipCode } from "../../../utility/validateZipCode";

export const AllComponents: React.FC = () => {
  const [zipCode, setZipCode] = useState<string>("");

  const router = useRouter();

    const handleInputChange = (value: string) => {
    setZipCode(value);
  };

  const handleSubmit = async () => {
    try { 
      if (zipCode == null || !validateZipCode(zipCode)) {
        alert("The zip code was either not provided or invalid")
        return null
      }

      router.push(`/displayPage?zipCode=${zipCode}`);
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
