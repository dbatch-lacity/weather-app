"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { validateZipCode } from "../../utility/validateZipCode";
import TextBox from "./components/textBox";
import SubmitButton from "./components/submitButton";
import { handleSubmit } from "./pageHelper";


export default function Home() {

  const [zipCode, setZipCode] = useState<string>("");

  const router = useRouter();

  
  return (
    <div>
      <h1>Weather App</h1>
      <div>
      <div>
      <div>
        <TextBox onInputChange={setZipCode} />
      </div>
      <div>
        <SubmitButton onSubmit={()=>{
          handleSubmit(zipCode, router)
        }} />
      </div>
    </div>
      </div>
    </div>
  );
}
