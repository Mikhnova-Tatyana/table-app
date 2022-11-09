import React, { useMemo, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import classes from './BreadCrumbs.module.scss';

const Breadcrumbs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const pathnames = useMemo(() => pathname.split(/\W(.*)/g, 2).filter(Boolean), [pathname]);
  const goHome = useCallback(() => navigate('/', { replace: true }), [navigate]);
  // const pathnames =  location.pathname.split(/\W(.*)/g, 2).filter(Boolean);
  // const goHome = () => navigate("/", {replace: true});

  return (
    <div className={classes.breadCrumbs}>
      {pathnames.length > 0
        ? (
          <>
            <div
              className={[classes.button__main, '_icon-home'].join(' ')}
              onClick={goHome}
            >
              Main
            </div>
            <span className={[classes.arrow, '_icon-arow_right'].join(' ')} />
          </>
        )
        : <span className={[classes.main, '_icon-home'].join(' ')}>Main</span>}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span
            className={[classes.item, name === 'drivers' ? '_icon-drivers' : '_icon-cars'].join(' ')}
            key={name}
          >
            {name}
          </span>
        )
          : (
            <div key={name} onClick={() => navigate(routeTo)}>
              {name}
            </div>
          );
      })}
    </div>
  );
};

export default Breadcrumbs;
