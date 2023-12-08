"use client";
import WeatherTable from "../components/weatherTable";
import { useSearchParams } from "next/navigation";
import { WeatherInfo } from "../api/weatherApi/route";
import { useEffect, useState } from "react";

function WeatherDisplayPage() {
  const [data, setData] = useState<WeatherInfo | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const searchParams = useSearchParams();
  const zipCode = searchParams?.get("zipCode");

  useEffect(() => {
    const fetchData = async () => {
      if (!zipCode) {
        alert("zip code is invalid or not provided");
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

export default WeatherDisplayPage;
