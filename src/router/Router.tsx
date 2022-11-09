import { Route, Routes } from 'react-router-dom';
import { navigationConfig } from '../constants/navigationConfig';
import Layout from '../components/Layout/Layout';
import CarsPage from '../pages/CarsPage/CarsPage';
import DriversPage from '../pages/DriversPage/DriversPage';
import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const Router = () => (
  <Routes>
    <Route
      path={navigationConfig.home.path}
      element={<Layout />}
    >
      <Route
        index
        element={<HomePage />}
      />
      <Route
        path={navigationConfig.drivers.path}
        element={<DriversPage />}
      />
      <Route
        path={navigationConfig.cars.path}
        element={<CarsPage />}
      />
      <Route
        path={navigationConfig.driver_cars.path}
        element={<CarsPage />}
      />
      <Route
        path={navigationConfig.redirect.path}
        element={<NotFoundPage />}
      />
    </Route>
  </Routes>
);

export default Router;
