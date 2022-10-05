//Import React Library [SENTAX]
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
//render external jsx component
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);

//render internal jsx component
const heading=(
  <h1> main js file </h1>
)

