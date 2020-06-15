import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router
} from 'react-router-dom';
//Librerias adicionales
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//Componentes
import App from './App';
//Estilos
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


let WithRouter = <Router><App /></Router>;

ReactDOM.render(WithRouter, document.getElementById('root'));

