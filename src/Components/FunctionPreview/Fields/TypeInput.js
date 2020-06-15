import React from 'react';
import ConvolutionFactory from '../../../Classes/Convolution/ConvolutionFactory';

const TypeInput = ({ setConvolutionAlgorithm }) => {
    const handleChange = event => {
        let { value } = event.target;
        setConvolutionAlgorithm(value);
    }
    return(
        <div className='form-group'>
            <label className='control-label'>Tipo de algoritmo a utilizar:</label>
            <select
                className = 'form-control'
                onChange = { handleChange }
            >
                <option value={ ConvolutionFactory.BASIC }>Básico</option>
                <option value={ ConvolutionFactory.PERIODIC }>Periódica</option>
                <option value={ ConvolutionFactory.CIRCULAR }>Circular</option>
            </select>
        </div>
    )
}

export default TypeInput;