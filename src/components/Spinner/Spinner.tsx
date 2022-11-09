import React, { FC } from 'react';
import { Circles } from 'react-loader-spinner';
import classes from './Spinner.module.scss';

const Spinner: FC = () => {
  const spinnerFeatures = {
    type: 'Circles',
    color: '#737df9',
    height: `${100}`,
    width: `${100}`,
  };
  return (
    <div className={classes.spinner}>
      <Circles {...spinnerFeatures} />
    </div>
  );
};

export default Spinner;
