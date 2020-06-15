import React, { useEffect, useState } from 'react';
import withAlert from './HOC/withAlert';

const Alert = ({ alert, children, setAlert }) => {
    //State
    const [showAlert, setShowAlert] = useState(false);
    //Props
    let { type, message, duration } = alert;
    //Constantes
    const DEFAULT_ALERT_TIME = 3000;


    useEffect(() => {
        setShowAlert(false);
    }, []);


    useEffect(() => {
        let alertDuration = duration || DEFAULT_ALERT_TIME;
        if(alert.message){
            setShowAlert(true);
            setTimeout(hideAndClearAlert, alertDuration);
        }
    }, [alert.message]);

    const hideAndClearAlert = () => {
        setShowAlert(false);
        setAlert({
            type: '',
            message: '',
            duration: null
        });
    }

    const getDisplayType = () => {
        return showAlert ? 'd-block' : 'd-none';
    }

    return(
        <div className={ `alert alert-${ type || 'danger' } rounded-lg shadow ${ getDisplayType() }` } role='alert'>
            { message }
        </div>
    )
};

export default withAlert(Alert);