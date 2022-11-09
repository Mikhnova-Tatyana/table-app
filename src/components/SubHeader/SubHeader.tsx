import React from 'react';
import classes from './SubHeader.module.scss';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';
import TaxiIcon from '../../assets/images/taxi.gif';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const SubHeader = () => {
  const { isActive } = useTypedSelector((state) => state.menu);
  const rootClasses: string[] = [classes.wrapper];
  if (isActive) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(' ')}>
      <Breadcrumbs />
      <img src={TaxiIcon} alt="taxi" width="35px" height="35px" />
    </div>
  );
};

export default SubHeader;
