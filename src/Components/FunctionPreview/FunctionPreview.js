import React, { useContext, useEffect, useState } from 'react';
//Componentes
import Sequence from '../Sequence/Sequence';
import SubmitButton from '../Layout/SubmitButton';
import SequencesCharts from './Charts/SequencesCharts';
import TypeInput from './Fields/TypeInput';

const FunctionPreview = props => {
    //PROPS
    //Funciones
    let { firstFunction, secondFunction } = props;
    //Handlers
    let { handleSubmit, clearFunctions, setConvolutionAlgorithm } = props;
    return(
        <div className='container text-center mt-3 py-3'>
            <h3>Preview de las secuencias</h3>
            <button className='btn btn-danger btn-sm rounded-lg shadow' onClick = { clearFunctions }>
                Restablecer
            </button>
            <hr/>
            <SequencesCharts
                firstSequence = { firstFunction }
                secondSequence = { secondFunction }
            />

            <TypeInput
                setConvolutionAlgorithm = { setConvolutionAlgorithm }
            />
            <SubmitButton
                onClick = { handleSubmit }
            >
                Calcular
            </SubmitButton>
        </div>
    )
}

export default FunctionPreview;

/*
Sequence =  functions.firstFunction
*/