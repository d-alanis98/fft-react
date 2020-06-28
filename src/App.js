import React, { useState, Fragment } from 'react';
//Componentes
import Alert from './Components/Alerts/Alert';
import Routes from './Routes';
import Navbar from './Components/Layout/Navigation/Navbar';
//HOCS
import withContextProvider from './Context/InputSequence/HOC/withContextProvider';
import withAlertProvider from './Components/Alerts/HOC/withAlertProvider';
//Estilos
import './App.css';
import withConvolutionProvider from './Context/Convolution/HOC/withConvolutionProvider';




const App = () => {
    return(
        <Fragment>
            <Navbar />
            <Alert />
            <Routes />
        </Fragment>
    )
}

export default withAlertProvider(withContextProvider(withConvolutionProvider(App)));