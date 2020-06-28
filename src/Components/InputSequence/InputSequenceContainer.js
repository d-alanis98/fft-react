import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
//Componentes
import InputSequence from './InputSequence';
//HOC
import withContextConsumer from '../../Context/InputSequence/HOC/withContextConsumer';
//Clases
import AlgorithmFactory from '../../Classes/FFT/AlgorithmFactory';

const FunctionInputContainer = ({ history, alert, sequence, operation: sequenceOperation, setAlert, setSequence }) => {
    //Constantes
    const SEQUENCE_LENGTH = 'La secuencia debe ser de tamaño 2^n con n > 0'
    const SEQUENCE_UNDEFINED = 'Se debe proporcionar la secuencia';
    //Hooks
    const [operation, setOperation] = useState();
    const [inputSequence, setInputSequence] = useState();

    //Efectos
    useEffect(() => {
        //Se recuperan los valores establecidos en el contexto
        console.log({ sequence, sequenceOperation })
        setOperation(sequenceOperation);
        setInputSequence(sequence);
    }, [])

    const saveParameters = algorithmInstance => {
        setSequence({
            sequence: inputSequence,
            operation: operation,
            algorithmInstance: algorithmInstance
        });
    }

    const notifySequenceError = errorMessage => {
        setAlert({
            type: 'danger',
            message: errorMessage,
            duration: 5000
        });
    }

    //HANDLERS 

    const handleOperationChange = event => {
        let { value } = event.target;
        setOperation(value);
    }

    const handleInputSequenceChange = event => {
        let { value } = event.target;
        setInputSequence(value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        if(!inputSequence){
            notifySequenceError(SEQUENCE_UNDEFINED);
            return;
        }
        let algorithmFactory = new AlgorithmFactory(inputSequence);
        let algorithmToUse = algorithmFactory.create(operation);
        //Si obtenemos una instancia nula esto se debe a que la entrada no satisface los requerimentos (ser de tamaño 2^n)
        if(!algorithmToUse){
            notifySequenceError(SEQUENCE_LENGTH);
            return;
        }
        saveParameters(algorithmToUse);
        redirectToPreview();
    }

    const redirectToPreview = () => {
        history.push('/preview');
    }


    return <InputSequence
                sequence = { inputSequence }
                operation = { operation }
                handleSubmit = { handleSubmit }
                algorithmInstance = { sequence.algorithmInstance }
                handleOperationChange = { handleOperationChange }
                handleInputSequenceChange = { handleInputSequenceChange }
            />
}

export default withContextConsumer(withRouter(FunctionInputContainer));