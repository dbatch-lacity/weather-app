import React from 'react'
import Page from './page'
import '@testing-library/jest-dom'
import WeatherTable from '../components/weatherTable'
import { render, screen } from '@testing-library/react'

describe("landingPage", () => {

    it("should render properly", () => {
        render(<Page />)
        const header = screen.getByRole('heading')
        const headerText = 'Weather'
        expect(header).toHaveTextContent(headerText)
    })

    it("should return a table", () => {
        const table = <div><table></table></div>
        expect(WeatherTable).toHaveReturnedWith(table)
    })
    
})