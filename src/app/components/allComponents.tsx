'use client'
import React, {useState} from 'react'
import TextBox from './textBox'
import SubmitButton from './submitButton'
import FetchWeatherData from '../weatherInfo/page'
import {WeatherInfo} from '../weatherInfo/page'

export const AllComponents: React.FC = () => {
  const [zipCode, setZipCode] = useState<string>('')
  const [weatherData, setWeatherData] = useState<WeatherInfo | null>(null);
  

  const handleInputChange = (value: string) => {
    setZipCode(value)
  }

  const handleSubmit = async () => {
    try{
      const weatherData = await FetchWeatherData(zipCode)
      if(weatherData) {
        setWeatherData(weatherData)
      }
      
    }catch (error) {
      console.error('Error fetching weather data:', error)
    }
  }

  return (
    <div>
      <div>
        <TextBox onInputChange={handleInputChange} />
      </div>
      <div>
        <SubmitButton onSubmit={handleSubmit} />
      </div>
      
    </div>
  )
}

export default AllComponents