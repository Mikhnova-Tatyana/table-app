import React, { FC } from 'react';
import { ReactComponent as LogoAJ } from '../../assets/images/logo_AJ.svg';
import { ReactComponent as BurgerIcon } from '../../assets/images/burger.svg';
import Navigation from '../Navigation/Navigation';
import classes from './NavBlock.module.scss';

const NavBlock: FC = () => (
  <>
    <div className={classes.navBlock__icons}>
      <BurgerIcon className={classes.navBlock__button} />
      <LogoAJ />
    </div>
    <Navigation />
  </>
);

export default NavBlock;
