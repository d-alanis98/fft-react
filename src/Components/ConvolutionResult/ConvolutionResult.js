import React from 'react';
//Componentes
import Sequence from '../Sequence/Sequence';
import ResultSequenceChart from './Charts/ResultSequenceChart';
//HOC
import withConvolution from '../../Context/Convolution/HOC/withConvolution';


const ConvolutionResult = ({ convolutionResult }) => {
    return(
        <div className='container text-center'>
            <h2>Resultados</h2>
            <Sequence 
                label = 'Secuencia de resultado:'
                sequence = { convolutionResult }
                sequenceProperty = 'sequence'
            />
            <div className='row justify-content-center'>
                <div className='col-lg-6 col-md-12'>
                    <ResultSequenceChart
                        resultSequence = { convolutionResult }
                    />
                </div>
            </div>
        </div>
    )
}

export default withConvolution(ConvolutionResult);

