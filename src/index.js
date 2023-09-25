import React from 'react'; // importa react
import ReactDOM from 'react-dom/client'; // paquete que permite conectar react con el DOM
import './index.css'; // importar los estilos
import App from './App'; // importar el archivo o componente app.js
import reportWebVitals from './reportWebVitals'; // paquete que permite generar reportes pero no es necesario al principio

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
