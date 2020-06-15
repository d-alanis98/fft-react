import React, { useContext, useEffect } from 'react';
//Context
import AlertContext from '../Context/AlertContext';

const withAlert = WrappedComponent => {
    const WithAlert = props => {
        let [alert, setAlert] = useContext(AlertContext);

        return(
            <WrappedComponent
                alert = { alert }
                setAlert = { setAlert }
                { ...props }
            />
        )
    }

    return WithAlert;
}

export default withAlert;