import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from "react-redux";

import App from './App';
import * as serviceWorker from './serviceWorker';
import {GlobalStyle} from "./style";
import {store} from "./store";



render(
  <Provider store={store}>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
