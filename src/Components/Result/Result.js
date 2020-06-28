import React from 'react';
//Componentes
import Sequence from '../Sequence/Sequence';
import SequencesChart from '../FunctionPreview/Charts/SequencesChart';
//HOC
import withResult from '../../Context/Result/HOC/withResult';
//Clases
import AlgorithmFactory from '../../Classes/FFT/AlgorithmFactory';


const Result = ({ sequence, operation, inputSequence }) => {
    const getRealSequence = () => {
        if(operation === AlgorithmFactory.FFT)
            return sequence.map(sample => sample.re);
        else return sequence.map(sample => sample.abs());
    }
    return(
        <div className='container text-center'>
            <h2>Resultados</h2>
            <Sequence 
                label = 'Secuencia de entrada:'
                sequence = { inputSequence }
            />
            <hr />
            <SequencesChart 
                label = 'Secuencia de resultado: '
                sequence = { getRealSequence() }
                operation = { operation }
                complexSequence = { sequence }
            />
        </div>
    )
}

export default withResult(Result);

