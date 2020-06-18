import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'

import App from './App';
import * as serviceWorker from './serviceWorker';
import {GlobalStyle} from "./style";

render(
  <Router>
    <GlobalStyle />
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
