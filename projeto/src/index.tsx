import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import MenuApp from './menuBar/menuApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// const arrayLinks = ["Gestão de Parceiros", "Gestão de Máquinas", "Gestão de Empréstimos"]
root.render(
  <React.StrictMode>
    {/* <MenuApp links={arrayLinks}/> */}
     <BrowserRouter>
       <App/>
     </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
