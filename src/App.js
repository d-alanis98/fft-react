import React, { useState, Fragment } from 'react';
//Componentes
import Alert from './Components/Alerts/Alert';
import Routes from './Routes';
import Navbar from './Components/Layout/Navigation/Navbar';
//HOCS
import withAlertProvider from './Components/Alerts/HOC/withAlertProvider';
import withResultProvider from './Context/Result/HOC/withResultProvider';
import withContextProvider from './Context/InputSequence/HOC/withContextProvider';
//Estilos
import './App.css';





const App = () => {
    return(
        <Fragment>
            <Navbar />
            <Alert />
            <Routes />
        </Fragment>
    )
}

export default withAlertProvider(withContextProvider(withResultProvider(App)));