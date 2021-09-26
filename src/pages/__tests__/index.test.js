import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import Home from '../index'

describe('Home', () => {
  const athlete = {
    first_name: 'John',
    last_name: 'Doe',
    shoes: [{
      id: 0,
      brand_name: 'Brand',
      model_name: 'Model ',
      distance: 1000,
    }]
  };
  const activities = [
    {
      id: 0,
      name: 'Activity Name',
      distance: 1000,
      moving_time: 360,
      total_elevation_gain: 0 
    }
  ]

  it('does not crash', () => {
    render(<Home athlete={athlete} activities={activities} />)
  })

  it('matches snapshot', () => {
    const tree = renderer
      .create(<Home athlete={athlete} activities={activities} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
})