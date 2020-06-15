import React from 'react';

const SubmitButton = ({ onClick, children }) => (
    <div className='form-group text-center'>
        <button
            onClick = { onClick }
            className = 'btn btn-outline-primary rounded-lg shadow'
        >
            { children }
        </button>

    </div>
);

export default SubmitButton;