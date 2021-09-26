import React from 'react'
import { render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Week from '../Week'

describe('Week', () => {
  const activities = [
    {id: 0, name: 'activity1', start_date: new Date(Date.UTC(2021, 1,1)).toUTCString(), distance: 1000, moving_time: 360, total_elevation_gain: 100},
    // {id: 1, name: 'activity2', start_date: new Date(Date.UTC(2021, 1,2)).toUTCString(), distance: 1000, moving_time: 1800, total_elevation_gain: 100},
    // {id: 2, name: 'activity3', start_date: new Date(Date.UTC(2021, 1,3)).toUTCString(), distance: 1000, moving_time: 3600, total_elevation_gain: 100},
  ]

  it('renders title', () => {
    render(<Week activities={activities} />)

    expect(screen.getByText(/Week/i)).toBeInTheDocument();
  });

  it('renders week stats', () => {
    render(<Week activities={activities} />)

    expect(screen.getByTestId('distance-value')).toHaveTextContent('0.62 mi')
    expect(screen.getByTestId('time-value')).toHaveTextContent('0h 6m')
    expect(screen.getByTestId('elevation-value')).toHaveTextContent('329 ft')
  })
})
