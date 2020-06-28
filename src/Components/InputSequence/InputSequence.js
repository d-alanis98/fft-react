import React from 'react';
//Componentes
import SubmitButton from '../Layout/SubmitButton';
import InputSequenceField from './Fields/InputSequenceField';
//Clases
import AlgorithmFactory from '../../Classes/FFT/AlgorithmFactory';


const FunctionInput = ({ handleSubmit, handleOperationChange, handleInputSequenceChange }) => (
    <div className='container text-center text-main mt-3 py-4'>
        <h3>1. Seleccione el tipo de operación</h3>
        <div className='form-group'>
            <select className='form-control' onChange={ handleOperationChange }>
                <option value={ AlgorithmFactory.FFT }>FFT</option>
                <option value={ AlgorithmFactory.IFFT }>IFFT</option>
            </select>
        </div>
        <h3>2. Introducir secuencia</h3>
        <InputSequenceField
            name = 'firstFunction'
            label = 'Secuencia: '
            onChange = { handleInputSequenceChange }
            placeholder = 'Introducir los numeros separados por comas'
        />
        <hr />
        <SubmitButton
            onClick = { handleSubmit }
        >
            { 'Avanzar'  }
        </SubmitButton>
    </div>
)


export default FunctionInput;