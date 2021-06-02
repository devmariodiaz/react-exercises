import React from 'react';
import PropTypes from 'prop-types';

const PrimerApp = ( {saludo, subtitulo } ) => {

    // const saludo = 'Hola Mundo'
    // const saludo = {
    //     nombre: 'Mario',
    //     edad: 36
    // }

    // if(!saludo){
    //     throw new Error('El saludo es requerido.')
    // }

    console.log({saludo});
    return (
        <>
            <h1>{ saludo }</h1>
            {/* <h1>{ saludo }</h1> */}
            {/* <h1>{ JSON.stringify(saludo, null, 3) }</h1> */}
            <p>{ subtitulo }</p>
        </>
    );
}

PrimerApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimerApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimerApp;