import React from 'react'
import ReactDOM from 'react-dom/client'

import './style.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { HeroesApp } from './HeroesApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* <BrowserRouter basename={"/heroes-app"}> */}
      <HashRouter>
        <HeroesApp />
      </HashRouter>
      {/* </BrowserRouter> */}
  </React.StrictMode>,
)
