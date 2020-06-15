import React, { useState } from 'react';
import AlertContext from '../Context/AlertContext';


const withAlertProvider = WrappedComponent => {
    const initialAlertState = {
        type: '',
        message: '',
        duration: 3000
    }
    const WithAlertProvider = props => {
        const alert = useState(initialAlertState);
        return(
            <AlertContext.Provider value = { alert }>
                <WrappedComponent
                    { ...props }
                />
            </AlertContext.Provider>
        )
    }

    return WithAlertProvider;
}

export default withAlertProvider;