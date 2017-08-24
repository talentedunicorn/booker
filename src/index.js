import React from 'react';
import './index.css';
import App from './App';
import { render }  from 'react-snapshot';
import registerServiceWorker from './registerServiceWorker';

render(
  <App />, 
  document.getElementById('root')
);
registerServiceWorker();
