import React, { useState } from 'react';
import SequenceContext from '../SequenceContext';

const withContextProvider = WrappedComponent => {
    const WithContextProvider = props => {
        const sequence = useState()

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