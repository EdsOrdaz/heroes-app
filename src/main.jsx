import React from 'react'
import ReactDOM from 'react-dom/client'

import './style.css';
import { HashRouter } from 'react-router-dom';
import { HeroesApp } from './HeroesApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HashRouter>
        <HeroesApp />
      </HashRouter>
  </React.StrictMode>,
)
