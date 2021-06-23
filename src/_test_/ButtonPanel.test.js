import React from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ButtonPanel from '../components/ButtonPanel';

describe('Test ButtonPanel component', () => {
  it('Add screenshot test', () => {
    const { asFragment } = render(<ButtonPanel />);
    expect(asFragment(<ButtonPanel />)).toMatchSnapshot();
  });
});
