// pages/api/weather.js
import { headers } from "next/headers";
interface Geographic {
  zip: number;
  name: string;
  lat: number;
  lon: number;
  country: string;
}

export interface WeatherInfo {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export default async function fetchWeatherData(zipCode: string) {
  const location = zipCode;
  require("dotenv").config();
  console.log(process.env.NEXT_PUBLIC_API_KEY);

  try {
    // Fetch latitude and longitude using the Zip Code API
    const geoApiUrl = `http://api.openweathermap.org/geo/1.0/zip?zip=${location}&appid=${process.env.NEXT_PUBLIC_API_KEY}`;
    console.log(geoApiUrl);
    const responseGeo = await fetch(geoApiUrl);
    const dataGeo: Geographic = await responseGeo.json();

    // Fetch weather using the latitude and longitude
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${dataGeo.lat}&lon=${dataGeo.lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}`;

    const res = await fetch(weatherApiUrl, {
      cache: "no-store",
    });
    if (!res.ok) {
      console.error("Error fetching weather data:", res.statusText);
      return null;
    }

    const weatherInfo: WeatherInfo = await res.json();
    return weatherInfo;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}
