import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {

    // const [ nombre, setNombre ] = useState('Goku');


    let [ counter, setCounter ] = useState( value );
    // console.log(nombre, setNombre);

    const handledAdd = (e) => setCounter(counter + 1);
    const handledSubstract = () => setCounter(counter - 1);
    const handledReset = () => setCounter(value);

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handledAdd }>+1</button>
            <button onClick={ handledReset }>Reset</button>
            <button onClick={ handledSubstract }>-1</button>
            {/* <button onClick={ (e) => { handledAdd(e) } }>+1</button> */}
        </>
    );
}


CounterApp.PropType = {
    value: PropTypes.number
}

export default CounterApp;

