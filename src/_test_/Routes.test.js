import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Routes from '../components/Routes';

describe('Test Routes component', () => {
  beforeEach(() => {
    render(<Routes />)
  });

  it ('Add screenshot test', () => {
    const { asFragment } = render(<Routes />)
    expect(asFragment(<Routes />)).toMatchSnapshot();
  })

  it('Display calculator', () => {
    const text = screen.getByText(/Calculator/i);
    expect(text).toBeInTheDocument();
  })

  it('Display qoutes', () => {
    const text = screen.getByText(/Qoutes/i);
    expect(text).toBeInTheDocument();
  })

  it('Display Maths up', () => {
    const text = screen.getByText(/Maths-up/i);
    expect(text).toBeInTheDocument();
  })

})