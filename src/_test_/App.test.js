import React from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/App';
import { render } from '@testing-library/react';

describe('Test App component', () => {
  it('Add screenshot test for app component', () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  })
})