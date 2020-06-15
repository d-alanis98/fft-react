import React, { useState, useEffect } from 'react';
import ConvolutionContext from '../ConvolutionContext';

const withConvolutionProvider = WrappedComponent => {
    let initialConvolutionResult = {
        origin: 0,
        sequence: [],
        periodic: false
    }
    const WithConvolutionProvider = props => {
        let convolutionResult = useState(initialConvolutionResult);

        return(
            <ConvolutionContext.Provider value = { convolutionResult }>
                <WrappedComponent
                    { ...props }
                />
            </ConvolutionContext.Provider>
        )
    }

    return WithConvolutionProvider;
}

export default withConvolutionProvider;