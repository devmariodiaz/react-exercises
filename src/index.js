import React from 'react';
import ReactDOM  from 'react-dom';
import CounterApp from './CounterApp';

import './index.css';

const divRoot = document.querySelector("#root");

ReactDOM.render(<CounterApp value={ 5 } />, divRoot);
// ReactDOM.render(<PrimerApp saludo="Hola, soy Goku" />, divRoot);