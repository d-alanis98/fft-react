import React, { Fragment } from 'react';

const Title = () => (
    <Fragment>
        <div className='d-flex flex-row justify-content-around'>
            <div>
                <img src='https://www.encb.ipn.mx/assets/files/encb/img/escudos/logo-ipn.png' height='100px' width='100px' />
            </div>
            <div>
                <h2>Instituto Politécnico Nacional</h2>
                <h3>Escuela Superior de Cómputo</h3>
            </div>
            <div>
                <img src='https://www.escom.ipn.mx/images/logoESCOM2x.png' height='100px' width='100px' />
            </div>
        </div>
        <hr/>
        <div className='my-4'>
            <h4>Práctica 2: Algoritmos de convolución de secuencias</h4>
            <img src='https://img.pngio.com/matching-algorithm-png-skratch-algorithm-png-512_512.png' height='100px' width='100px' />
        </div>
    </Fragment>
);

export default Title;