import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import SubHeader from '../SubHeader/SubHeader';
import classes from './Layout.module.scss';

const Layout: FC = () => (
  <header className={classes.layout}>
    <Header />
    <SubHeader />
    <Outlet />
  </header>
);
export default Layout;
