import React from "react";
import { WeatherInfo } from "../weatherInfo/fetchWeather";

interface WeatherTableProps {
  weatherInfo?: WeatherInfo | null;
}

const WeatherTable: React.FC<WeatherTableProps> = ({ weatherInfo }) => {
  if (!weatherInfo) {
    return <div></div>;
  }

  return (
    <div>
      <h1>{weatherInfo.name} Weather</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Temperature</th>
            <th>Weather Description</th>
            <th>Wind Speed</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {Math.round((weatherInfo.main.temp - 273.15) * (9 / 5) + 32)} F°
            </td>
            <td>{weatherInfo.weather[0].main}</td>
            <td>{weatherInfo.wind.speed} MPH</td>
            <td>{weatherInfo.main.humidity}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherTable;
