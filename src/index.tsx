import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import { Provider } from 'react-redux';
import Spinner from './components/Spinner/Spinner';
import { store } from './redux/store';
import './index.scss';
import './i18n/i18n';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Suspense fallback={<Spinner />}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Suspense>,
);

reportWebVitals();
