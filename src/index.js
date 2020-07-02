import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from "react-redux";

import ErrorBoundary from "./components/error-boundary";
import TakeLookService from "./services/takelook-service";

import { TakeLookServiceContext } from "./components/takelook-service-context";

import store from "./store";

const takelookService = new TakeLookService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <TakeLookServiceContext.Provider value={takelookService}>
        <App />
      </TakeLookServiceContext.Provider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);



