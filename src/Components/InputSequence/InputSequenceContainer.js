import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
//Componentes
import InputSequence from './InputSequence';
//HOC
import withContextConsumer from '../../Context/InputSequence/HOC/withContextConsumer';
//Clases
import InputFunction from '../../Classes/InputFunction';
import AlgorithmFactory from '../../Classes/FFT/AlgorithmFactory';

const FunctionInputContainer = ({ history, alert, setAlert, setSequence }) => {
    //Hooks
    const [operation, setOperation] = useState(AlgorithmFactory.FFT);
    const [inputSequence, setInputSequence] = useState();

    //Efectos
    useEffect(() => {
        !alert.type && setAlert({
            type: 'info',
            message: 'Si va a definir secuencias periódicas, solo escriba la parte correspondiente a un periodo que incluya al origen',
            duration: 5000
        })
    }, [])

    const saveSequence = () => {
        setSequence(inputSequence);
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
            setAlert({
                type: 'danger',
                message: 'Se debe proprcionar la secuencia',
                duration: 4000
            })
            return;
        }
        let sequenceInput = new AlgorithmFactory(inputSequence);
        let basic = sequenceInput.create(operation);
        basic.calculate();
        console.log(operation)
        saveSequence();
    }

    const handleRedirect = event => {
        history.push('/preview');
    }


    return <InputSequence
                handleSubmit = { handleSubmit }
                handleOperationChange = { handleOperationChange }
                handleInputSequenceChange = { handleInputSequenceChange }
            />
}

export default withContextConsumer(withRouter(FunctionInputContainer));