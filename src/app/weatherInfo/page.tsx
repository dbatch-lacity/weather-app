import { error } from "console";
import React from "react";  

export interface WeatherInfo {
  location: Location;
  current: CurrentWeather;
}

interface WeatherCondition {
  text: string;
  icon: string;
  code: number;
}

interface CurrentWeather {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: WeatherCondition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}
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
 
  
  if (numInput % 1 != 0 || numInput <= 0 || numInput.toString().length != 5) {
    return false;
  }

  //no spaces
  //no leading zeros

  return true;
} 

export default async function fetchWeatherData(zipCode: string): Promise<WeatherInfo | null> {
  if (!validateZipCode(zipCode)) {
    console.log("This is not a valid US zipcode");
    return null;
  }

  try {
    const apiKey = "bcc267d5043d49b28d6164756231711";
    const location = zipCode;
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error('Error fetching weather data:', res.statusText);
      return null;
    }

    const weatherInfo: WeatherInfo = await res.json();
    return weatherInfo;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}
    
  // return (
  //   <div>
  //     <h1>Los Angeles Weather</h1>
  //     <p>{new Date().toLocaleTimeString()}</p>
  //     <table className="table table-bordered">
  //       <thead>
  //         <tr>
  //           <th>Temperature</th>
  //           <th>Weather Description</th>
  //           <th>Wind Speed</th>
  //           <th>Humidity</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         <tr>
  //           <td>{weatherInfo.current.temp_f} F°</td>
  //           <td>{weatherInfo.current.condition.text}</td>
  //           <td>{weatherInfo.current.wind_mph} MPH</td>
  //           <td>{weatherInfo.current.humidity}%</td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   </div>
  // );} catch{
  //   console.error('Error fetching weather data');
    
  //   return null;
 // }
  
//}
