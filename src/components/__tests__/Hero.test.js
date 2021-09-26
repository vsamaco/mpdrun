import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Hero from '../Hero'

describe('Hero', () => {
  it('renders a heading', () => {
    render(<Hero />)

    const heading = screen.getByText(/milesperdonut/i)

    expect(heading).toBeInTheDocument();
  });

  it('renders section links', () => {
    render(<Hero />)

    const links = screen.getAllByRole('link');

    const sections = ['RUN','WEEK','SHOES','RACES']
    sections.forEach((section,index) => {
      expect(links[index]).toHaveTextContent(section);
      expect(links[index]).toHaveAttribute('href', `#${section.toLowerCase()}`);
    });
  })
});