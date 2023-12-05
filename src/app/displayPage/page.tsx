"use client";
import WeatherTable from "../components/weatherTable";
import { useSearchParams } from "next/navigation";
import fetchWeatherData, { WeatherInfo } from "../weatherInfo/fetchWeather";
import { useEffect, useState } from "react";

/**
 *
 * 1. validate we have a location (rewrite the validation)
 * 2. fetch data based on a passed paramater
 * 3. display the resulting data
 */
/**
 * change it from an async component to a regular comp
 * change results to be a state
 * use useEffect
 * make sure when entry is not valid to direct user to main page and show an alert saying entry is invalid
 * @returns
 */
function weatherDisplayPage() {
  const [test, setTest] = useState(0);

  const searchParams = useSearchParams();
  const zipCode = searchParams?.get("zipCode") as string;
  // const results = (await fetchWeatherData(zipCode)) as WeatherInfo;
  console.log("Weather Display page updated");

  useEffect(() => {
    setTest(test + 1);
    console.log("test in the body");
    return () => {
      console.log("test was tested once");
    };
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setTest(test * 10);
        }}
      >
        Button
      </button>
      {test}
      {/* <WeatherTable weatherInfo={results}></WeatherTable> {} */}
    </div>
  );
}

export default weatherDisplayPage;
