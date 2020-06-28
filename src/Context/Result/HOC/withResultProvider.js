import React, { useState } from 'react';
import ResultContext from '../ResultContext';

const withResultProvider = WrappedComponent => {
    let initialState = {
        operation: '',
        inputSequence: [],
        resultSequence: []
    }
    const WithResultProvider = props => {
        let result = useState(initialState);

        return(
            <ResultContext.Provider value = { result }>
                <WrappedComponent
                    { ...props }
                />
            </ResultContext.Provider>
        )
    }

    return WithResultProvider;
}

export default withResultProvider;