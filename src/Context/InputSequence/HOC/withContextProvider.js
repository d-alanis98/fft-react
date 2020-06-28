import React, { useState } from 'react';
//Contexto
import SequenceContext from '../SequenceContext';
//Clase
import AlgorithmFactory from '../../../Classes/FFT/AlgorithmFactory';

const withContextProvider = WrappedComponent => {
    let initialState = {
        sequence: '',
        operation: AlgorithmFactory.FFT,
        algorithmInstance: null
    };

    const WithContextProvider = props => {
        const sequence = useState(initialState)

        return(
            <SequenceContext.Provider value = { sequence }>
                <WrappedComponent
                    { ...props }
                />
            </SequenceContext.Provider>
        )
    }
    return WithContextProvider;
}

export default withContextProvider;