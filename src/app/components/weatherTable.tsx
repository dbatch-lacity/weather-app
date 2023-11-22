import React from 'react'
import {WeatherInfo} from '../weatherInfo/page'

interface WeatherTableProps {
  weatherInfo: WeatherInfo;
}

const WeatherTable: React.FC<WeatherTableProps> = ({ weatherInfo }) => {
  return (
    <div>
      <h1>{weatherInfo.location.name} Weather</h1>
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
            <td>{weatherInfo.current.temp_f} F°</td>
            <td>{weatherInfo.current.condition.text}</td>
            <td>{weatherInfo.current.wind_mph} MPH</td>
            <td>{weatherInfo.current.humidity}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherTable;
