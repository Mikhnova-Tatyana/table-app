import './scss/main.scss';
import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';

const App: FC = () => (
  <div className="App">
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </div>
);

export default App;
