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
  const [data, setData] = useState<WeatherInfo | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const searchParams = useSearchParams();
  const zipCode = searchParams?.get("zipCode") as string;
  console.log("Weather Display page updated");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = (await fetchWeatherData(zipCode)) as WeatherInfo;
        setData(result);
      } catch {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <WeatherTable weatherInfo={data}></WeatherTable> {}
    </div>
  );
}

export default weatherDisplayPage;
