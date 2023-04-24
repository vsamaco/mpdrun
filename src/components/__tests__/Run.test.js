import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Run from '../Run'

describe('Run', () => {
  const activities = [{
    name: 'Activity Name',
    distance: 1000,
    moving_time: 360,
    total_elevation_gain: 0 
  }];

  it('renders title', () => {
    render(<Run activities={activities} />)
    expect(screen.getByRole('heading', {level: 3})).toHaveTextContent(/Run/i);
  });

  it('renders activity name', () => {
    render(<Run activities={activities} />)
    expect(screen.getByRole('heading', {level: 4})).toHaveTextContent(/Activity Name/i);
  })

  it('render stats', () => {
    render(<Run activities={activities} />)
    const stats = screen.getAllByRole('listitem');
    expect(stats[0]).toHaveTextContent('0.62 mi')
    expect(stats[1]).toHaveTextContent('0h 6m')
    expect(stats[2]).toHaveTextContent('0 ft')
  });

  it.todo('render map');
})