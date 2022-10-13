import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReyesJennifer from './ReyesJennifer';
import Office from './Office';
import Gmail from './Gmail';
import Other from './Other';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>

     <Route path="/" element={<App />} />
      <Route path="/result" element={<ReyesJennifer />} />
      <Route path="/office" element={<Office />} />
      <Route path="/gmail" element={<Gmail />} />
      <Route path="/other" element={<Other />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a functionnpm run
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
