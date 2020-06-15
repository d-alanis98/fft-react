import React from 'react';

const FunctionInputField = ({ id, name, type, label, placeholder, onChange, ...rest }) => {

    const handleChange = event => {
        if(onChange && typeof(onChange) === 'function')
            onChange(event);
    }

    return(
        <div className='form-group text-left'>
            <label>{ label }</label>
            <input
                id = { id }
                name = { name }
                type = { type || 'text' }
                onChange = { handleChange }
                className = 'form-control'
                placeholder = { placeholder }
                { ...rest }
            />

        </div>
    )
}

export default FunctionInputField;