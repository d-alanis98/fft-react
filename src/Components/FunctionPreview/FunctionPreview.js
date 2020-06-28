import React from 'react';
//Componentes
import SubmitButton from '../Layout/SubmitButton';
import SequencesChart from './Charts/SequencesChart';

const FunctionPreview = ({ sequence, operation, complexSequence, handleSubmit }) => (
    <div className='container text-center mt-3 py-3'>
        <h3>Preview de las secuencias</h3>
        <hr/>
        <SequencesChart
            sequence = { sequence }
            operation = { operation }
            complexSequence = { complexSequence }
        />

        <SubmitButton
            onClick = { handleSubmit }
        >
            Calcular { operation }
        </SubmitButton>
    </div>
);

export default FunctionPreview;
