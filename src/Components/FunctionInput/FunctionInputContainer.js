import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
//Componentes
import FunctionInput from './FunctionInput';
//HOC
import withContextConsumer from '../../Context/InputFunction/HOC/withContextConsumer';
//Clases
import InputFunction from '../../Classes/InputFunction';

const FunctionInputContainer = ({ history, alert, setAlert, setFunctions }) => {
    //Initial states
    const initialSequenceInput = {
        firstFunction: '',
        secondFunction: ''
    }
    const initialSequenceConstraints = {
        firstFunctionOrigin: 0,
        firstFunctionPeriodic: false,
        secondFunctionOrigin: 0,
        secondFunctionPeriodic: false
    }
    //Hooks
    const [sequenceInput, setSequenceInput] = useState(initialSequenceInput);
    const [inputFunctions, setInputFunctions] = useState();
    const [sequenceConstraints, setSequenceConstraints] = useState(initialSequenceConstraints);

    //Efectos
    useEffect(() => {
        !alert.type && setAlert({
            type: 'info',
            message: 'Si va a definir secuencias periódicas, solo escriba la parte correspondiente a un periodo que incluya al origen',
            duration: 5000
        })
    }, [])

    const saveFunctions = () => {
        let { firstFunctionAsArray, secondFunctionAsArray } = getInputFunctionAsArray()
        //Actualizamos el estado
        let { firstFunctionProperties, secondFunctionProperties } = getInputFunctionsProperties(firstFunctionAsArray, secondFunctionAsArray);
        let functions = {    
            firstFunction:  new InputFunction(firstFunctionProperties),
            secondFunction: new InputFunction(secondFunctionProperties)
        }
        setInputFunctions(functions);
        setFunctions(functions);
    }

    const getInputFunctionAsArray = () => {
        return{
            firstFunctionAsArray: InputFunction.getInputAsArray(sequenceInput.firstFunction),
            secondFunctionAsArray: InputFunction.getInputAsArray(sequenceInput.secondFunction)
        }
    }

    const getInputFunctionsProperties = (firstFunctionAsArray, secondFunctionAsArray) => {
        return{
            firstFunctionProperties: {
                sequence: firstFunctionAsArray,
                origin: sequenceConstraints.firstFunctionOrigin,
                periodic: sequenceConstraints.firstFunctionPeriodic
            },
            secondFunctionProperties: {
                sequence: secondFunctionAsArray,
                origin: sequenceConstraints.secondFunctionOrigin,
                periodic: sequenceConstraints.secondFunctionPeriodic
            }
        }
    }

    //HANDLERS 

    const handleInputFunctionChange = event => {
        let { name, value } = event.target;
        setSequenceInput({
            ...sequenceInput,
            [name]: value
        });
    }

    const handleConstraintsChange = event => {
        let { name, value, type } = event.target;
        value = (type === 'checkbox') ? (event.target.checked ? true : false) : parseInt(value);
        setSequenceConstraints({
            ...sequenceConstraints,
            [name]: value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        if(!sequenceInput.firstFunction || !sequenceInput.secondFunction){
            setAlert({
                type: 'danger',
                message: 'Se deben proprcionar ambas secuencias',
                duration: 4000
            })
            return;
        }
        saveFunctions();
    }

    const handleRedirect = event => {
        history.push('/preview');
    }


    return <FunctionInput
                handleSubmit = { handleSubmit }
                handleRedirect = { handleRedirect }
                inputFunctions = { inputFunctions }
                handleConstraintsChange = { handleConstraintsChange }
                handleInputFunctionChange = { handleInputFunctionChange }
            />
}

export default withContextConsumer(withRouter(FunctionInputContainer));