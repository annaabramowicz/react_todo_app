import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Sandbox from './Sandbox';


// const routes = [
//   { url: '/', name: 'Strona główna' },
//   { url: '/blog', name: 'Blog' },
//   { url: '/pricing', name: 'Cennik' },
//   { url: '/contact', name: 'Kontakt' },
// ];

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Sandbox routes={routes}/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
