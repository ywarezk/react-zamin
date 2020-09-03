import React from 'react';
import { render } from '@testing-library/react';

import Haim from './haim';

describe('Haim', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Haim />);
    expect(baseElement).toBeTruthy();
  });
});
