import React from 'react-dom';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react';
import Qoutes from '../Qoutes';

describe('Test Qoutes component', () => {
  it('Add screenshot test', () => {
    const { asFragment } = render(<Qoutes />);
    expect(asFragment(<Qoutes />)).toMatchSnapshot();
  })
});