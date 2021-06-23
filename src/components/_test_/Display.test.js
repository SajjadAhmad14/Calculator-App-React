import React from 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from '../Display';

describe('Display component', () => {
  it('Display 0 as a result', () => {
    render(<Display result = '0' />);
    const text = screen.getByText('0');
    expect(text).toMatchSnapshot();
  })

  it('Display undefined as a result', () => {
    render(<Display result = 'undefined' />);
    const text = screen.getByText('undefined');
    expect(text).toMatchSnapshot();
  })

  it('Display null as a result', () => {
    render(<Display result = 'null' />);
    const text = screen.getByText('null');
    expect(text).toMatchSnapshot();
  })
})