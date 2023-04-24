import React from 'react'
import { render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Shoes from '../Shoes'

const shoesData = [
  { id: 1, brand_name: 'Saucony', model_name: 'Ride 15', name: 'Saucony Ride 15', distance: 1000 }
]

describe('Shoes', () => {
  it('renders title', () => {
    render(<Shoes shoes={shoesData} />)

    expect(screen.getByRole('heading')).toHaveTextContent(/Shoes/i)
  });

  it('renders shoes', () => {
    render(<Shoes shoes={shoesData} />)

    const shoes = screen.getAllByRole('listitem');

    // TODO: improve query selector for brand, model, distance nodes
    expect(within(shoes[0]).getByText(/Saucony/i)).toBeInTheDocument();
    expect(within(shoes[0]).getByText(/Ride 15/i)).toBeInTheDocument();
    expect(within(shoes[0]).getByText(/1 mi/i)).toBeInTheDocument();
  });
})

