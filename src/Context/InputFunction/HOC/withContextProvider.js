import React, { useState } from 'react';
import FunctionsContext from '../FunctionsContext';

const withContextProvider = WrappedComponent => {
    const WithContextProvider = props => {
        const functions = useState()

        return(
            <FunctionsContext.Provider value = { functions }>
                <WrappedComponent
                    { ...props }
                />
            </FunctionsContext.Provider>
        )
    }
    return WithContextProvider;
}

export default withContextProvider;