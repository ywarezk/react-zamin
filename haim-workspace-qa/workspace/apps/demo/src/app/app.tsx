import React from 'react';

import './app.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import { Haim } from '@nz/haim';

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */
  return (
    <div className="app">
      <Haim />
    </div>
  );
};

export default App;
