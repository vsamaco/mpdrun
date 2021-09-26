import React from 'react'
import { render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Races from '../Races'

describe('Races', () => {
  it('renders title', () => {
    render(<Races />)

    expect(screen.getByText(/Races/i)).toBeInTheDocument();
  });

  it('renders races', () => {
    render(<Races />)

    expect(screen.getByText(/San Francisco Marathon/i)).toBeInTheDocument();
    expect(screen.getByText(/Berkeley Half Marathon/i)).toBeInTheDocument();
  })
})