"use client";
import WeatherTable from "../components/weatherTable";
import { useSearchParams } from "next/navigation";
import fetchWeatherData, { WeatherInfo } from "../weatherInfo/fetchWeather";

/**
 *
 * 1. validate we have a location (rewrite the validation)
 * 2. fetch data based on a passed paramater
 * 3. display the resulting data
 */
async function weatherDisplayPage() {
  const searchParams = useSearchParams();
  const zipCode = searchParams?.get("zipCode") as string; //remove typecasting later on
  const results = (await fetchWeatherData(zipCode)) as WeatherInfo;
  console.log(results);
  return (
    <div>
      <WeatherTable weatherInfo={results}></WeatherTable> {}
    </div>
  );
}

export default weatherDisplayPage;
