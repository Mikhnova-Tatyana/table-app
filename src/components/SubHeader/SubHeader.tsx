import React, { FC } from 'react';
import classes from './SubHeader.module.scss';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';
import TaxiIcon from '../../assets/images/taxi.gif';

const SubHeader: FC = () => {
  const rootClasses: string[] = [classes.wrapper];

  return (
    <div className={rootClasses.join(' ')}>
      <Breadcrumbs />
      <img src={TaxiIcon} alt="taxi" width="35px" height="35px" />
    </div>
  );
};

export default SubHeader;
