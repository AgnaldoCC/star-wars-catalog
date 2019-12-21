import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes'

export default props =>
  <BrowserRouter>
    <div className="app">
      <Routes />
    </div>
  </BrowserRouter>