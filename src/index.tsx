import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'; //reseta o css (npm install normalize.css)
import './index.css';
import Cardapio from './pages/Cardapio';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Cardapio/>
  </React.StrictMode>
);