import React from 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from '../components/Display';

describe('Test Display component', () => {
  it('Add screenshot test', () => {
    const { asFragment } = render(<Display />);
    expect(asFragment(<Display />)).toMatchSnapshot();
  });

  it('Display 0 as a result', () => {
    render(<Display result="0" />);
    const text = screen.getByText('0');
    expect(text).toBeInTheDocument();
  });

  it('Display undefined as a result', () => {
    render(<Display result="undefined" />);
    const text = screen.getByText('undefined');
    expect(text).toBeInTheDocument();
  });

  it('Display null as a result', () => {
    render(<Display result="null" />);
    const text = screen.getByText('null');
    expect(text).toBeInTheDocument();
  });
});
