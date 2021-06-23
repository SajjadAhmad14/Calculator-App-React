import React from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import Button from '../components/Button';
import { render, screen } from '@testing-library/react';
describe('Test Button Component', () => {
  it('Take snapshot of Button', () => {
    const { asFragment } = render(<Button />);
    expect(asFragment(<Button />)).toMatchSnapshot();
  });

  it ('Render addition button', () => {
    render(<Button name = '+'/>);
    const text = screen.getByText('+');
    expect(text).toBeInTheDocument();
  })

  it ('Render substract button', () => {
    render(<Button name = '-'/>);
    const text = screen.getByText('-');
    expect(text).toBeInTheDocument();
  })

  it ('Render multiplication button', () => {
    render(<Button name = 'X'/>);
    const text = screen.getByText('X');
    expect(text).toBeInTheDocument();
  })

  it ('Render division button', () => {
    render(<Button name = '/'/>);
    const text = screen.getByText('/');
    expect(text).toBeInTheDocument();
  })

  it ('Render button with number 0', () => {
    render(<Button name = '0'/>);
    const text = screen.getByText('0');
    expect(text).toBeInTheDocument();
  })

  it ('Render button with number 1', () => {
    render(<Button name = '1'/>);
    const text = screen.getByText('1');
    expect(text).toBeInTheDocument();
  })

  it ('Render button with number 2', () => {
    render(<Button name = '2'/>);
    const text = screen.getByText('2');
    expect(text).toBeInTheDocument();
  })

  it ('Render button with number 3', () => {
    render(<Button name = '3'/>);
    const text = screen.getByText('3');
    expect(text).toBeInTheDocument();
  })

  it ('Render button with number 4', () => {
    render(<Button name = '4'/>);
    const text = screen.getByText('4');
    expect(text).toBeInTheDocument();
  })

  it ('Render button with number 5', () => {
    render(<Button name = '5'/>);
    const text = screen.getByText('5');
    expect(text).toBeInTheDocument();
  })

  it ('Render button with number 6', () => {
    render(<Button name = '6'/>);
    const text = screen.getByText('6');
    expect(text).toBeInTheDocument();
  })

  it ('Render button with number 7', () => {
    render(<Button name = '7'/>);
    const text = screen.getByText('7');
    expect(text).toBeInTheDocument();
  })

  it ('Render button with number 8', () => {
    render(<Button name = '8'/>);
    const text = screen.getByText('8');
    expect(text).toBeInTheDocument();
  })

  it ('Render button with number 9', () => {
    render(<Button name = '9'/>);
    const text = screen.getByText('9');
    expect(text).toBeInTheDocument();
  })
})