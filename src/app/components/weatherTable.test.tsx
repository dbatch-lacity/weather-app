import React from 'react'
import WeatherTable from './weatherTable'
import '@testing-library/jest-dom'

describe("weatherTable", () => {
    it("should return a table", () => {
        const table = <div><table></table></div>
        expect(WeatherTable).toHaveReturnedWith(table)
    })
    
})