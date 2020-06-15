import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
//Componentes
import SubmitButton from '../Layout/SubmitButton';
import AditionalSettings from './Fields/AditionalSettings';
import FunctionInputField from './Fields/FunctionInputField';
//HOC
import withContextConsumer from '../../Context/InputFunction/HOC/withContextConsumer';
//Clases
import InputFunction from '../../Classes/InputFunction';

const FunctionInput = props => {
    let { handleSubmit, handleRedirect, handleConstraintsChange, handleInputFunctionChange, inputFunctions } = props;
    return(
            <div className='container text-center text-main mt-3 py-4'>
                <h3>1. Introducir secuencias</h3>
                <FunctionInputField
                    name = 'firstFunction'
                    label = 'Secuencia1 [f(n)]: '
                    onChange = { handleInputFunctionChange }
                    placeholder = 'Introducir los numeros separados por comas'
                />
                <AditionalSettings
                    originFieldName = 'firstFunctionOrigin'
                    periodicFieldName = 'firstFunctionPeriodic'
                    onChange = { handleConstraintsChange }
                />
                <FunctionInputField
                    name = 'secondFunction'
                    label = 'Secuencia 2 [g(n)]: '
                    onChange = { handleInputFunctionChange }
                    placeholder = 'Introducir los numeros separados por comas'
                />
                <AditionalSettings
                    originFieldName = 'secondFunctionOrigin'
                    periodicFieldName = 'secondFunctionPeriodic'
                    onChange = { handleConstraintsChange }
                />
                <hr />
                <SubmitButton
                    onClick = { inputFunctions ? handleRedirect : handleSubmit }
                >
                    { inputFunctions ? 'Avanzar' : 'Guardar'  }
                </SubmitButton>
            </div>
    )
}

export default FunctionInput;