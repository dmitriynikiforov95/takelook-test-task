import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from "react-redux";

import ErrorBoundry from "./components/error-boundry";
import TakeLookService from "./services/takelook-service";
import { TakeLookServiceProvider } from "./components/takelook-service-context";

import store from "./store";

const takelookService = new TakeLookService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <TakeLookServiceProvider value={takelookService}>
        <App />
      </TakeLookServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);



