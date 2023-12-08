"use client";
import WeatherTable from "../components/weatherTable";
import { useSearchParams } from "next/navigation";
import fetchWeatherData, { WeatherInfo } from "../weatherInfo/fetchWeather";
import { useEffect, useState } from "react";
import { GET } from "../api/weatherApi/route";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

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
  const zipCode = searchParams?.get("zipCode");

  useEffect(() => {
    const fetchData = async () => {
      if (!zipCode) {
        alert("zip code is invalid or null");
        return;
      }
      try {
        const response = await fetch(`/api/weatherApi?zipCode=${zipCode}`);
        const result: WeatherInfo = await response.json();
        setData(result);
      } catch {
        setError(error);
      }
    };
    fetchData();
  }, [zipCode]);

  return (
    <div>
      <WeatherTable weatherInfo={data} />
    </div>
  );
}

export default weatherDisplayPage;
