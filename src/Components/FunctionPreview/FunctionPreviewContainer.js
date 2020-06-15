import React, { useContext, useEffect, useState } from 'react';
//Componentes
import FunctionPreview from './FunctionPreview';
//HOC
import withConvolution from '../../Context/Convolution/HOC/withConvolution';
import withContextConsumer from '../../Context/InputFunction/HOC/withContextConsumer';
//Clases
import ConvolutionFactory from '../../Classes/Convolution/ConvolutionFactory';



const FunctionPreviewContainer = ({ functions, history, convolutionResult, setAlert, setFunctions, setConvolutionResult, showDefaultAlert }) => {
    const [convolutionAlgorithmType, setConvolutionAlgorithm] = useState(ConvolutionFactory.BASIC);
    const [redirect, setRedirect] = useState(false);

    const clearFunctions = event => {
        setFunctions(null);
        showDefaultAlert(false);
        setAlert({
            type: 'warning',
            message: 'Se eliminaron las funciones introducidas, vuelva a ingresarlas'
        })
    }

    const errorCallback = error => {
        setRedirect(false);
        setAlert({
            type: 'danger',
            message: error
        })
    }

    const handleSubmit = event => {
        setRedirect(true);
        let convolutionFactory = new ConvolutionFactory(convolutionAlgorithmType, functions.firstFunction, functions.secondFunction)
        let convolutionAlgorithm = convolutionFactory.create()
        let convolutionResult = convolutionAlgorithm.calculate(errorCallback)
        setConvolutionResult(convolutionResult);
    }

    useEffect(() => {
        if(convolutionResult.sequence.length > 0 && redirect){
            redirectToResults();
        }
    }, [redirect, convolutionResult])

    const redirectToResults = () => {
        history.push('/result');
    }

    
    return <FunctionPreview
                handleSubmit = { handleSubmit }
                clearFunctions = { clearFunctions }
                firstFunction = { functions.firstFunction }
                secondFunction = { functions.secondFunction }
                setConvolutionAlgorithm = { setConvolutionAlgorithm }
            />
}

export default withContextConsumer(withConvolution(FunctionPreviewContainer));