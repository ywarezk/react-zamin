import React from 'react';

import cssModules from './haim.module.scss';

/* eslint-disable-next-line */
// export interface HaimProps {}

export const Haim = (props) => {
  return (
    <div className={cssModules.haim}>
      <h1>Welcome to haim!</h1>
    </div>
  );
};

export default Haim;
