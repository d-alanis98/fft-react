import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
//Componentes
import FunctionPreview from './FunctionPreview';
//HOC
import withResult from '../../Context/Result/HOC/withResult';
import withContextConsumer from '../../Context/InputSequence/HOC/withContextConsumer';
//Clases
import AlgorithmFactory from '../../Classes/FFT/AlgorithmFactory';




const FunctionPreviewContainer = ({ result, history, operation, setResult, algorithmInstance }) => {
    const [redirect, setRedirect] = useState(false);
    const [realSequence, setRealSequence] = useState([]);

    useEffect(() => {
        if(result.resultSequence.length > 0 && redirect){
            redirectToResults();
        }
    }, [redirect, result])

    useEffect(() => {
        if(algorithmInstance){
            setRealSequence(getRealSequence());
        }
    }, [algorithmInstance]);

    const handleSubmit = event => {
        setRedirect(true);
        let result = algorithmInstance.calculate();
        console.log({ result })
        setResult({
            operation: operation === AlgorithmFactory.FFT ? AlgorithmFactory.IFFT : AlgorithmFactory.FFT,
            inputSequence: algorithmInstance.inputSamples,
            resultSequence: result
        });
    }

    /**
     * Retorna un array compuesto por la magnitud de cada item del array (que son números complejos)
     */
    const getRealSequence = () => {
        if(operation === AlgorithmFactory.FFT)
            return algorithmInstance.inputSamples.map(sample => sample.re);
        else return algorithmInstance.inputSamples.map(sample => sample.abs());
    }

    const redirectToResults = () => {
        history.push('/result');
    }

    
    return <FunctionPreview
                sequence = { realSequence }
                operation = { operation }
                handleSubmit = { handleSubmit } 
                complexSequence = { algorithmInstance.inputSamples }
            />
            

}

export default withContextConsumer(withResult(withRouter(FunctionPreviewContainer)));