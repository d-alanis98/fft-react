import React from 'react';
//Componentes
import Chart from '../../Charts/Chart';
import Sequence from '../../Sequence/Sequence';
import AlgorithmFactory from '../../../Classes/FFT/AlgorithmFactory';

const SequencesCharts = ({ label, sequence, complexSequence, operation }) => {

    console.log({ sequence })

    const getRandomColor = () => {
        let r = Math.floor(Math.random() * 256);  
        let g = Math.floor(Math.random() * 256);         
        let b = Math.floor(Math.random() * 256);  
        return `${r}, ${g}, ${b}`;        
    }
    return (
        <div className='container'>
            <Sequence
                label = { label || 'Secuencia: ' }
                sequence = { complexSequence }
            />
            <Chart
                id = 'first_sequence_chart'
                type = { operation === AlgorithmFactory.FFT ? 'bar' : 'line' }
                label = 'Secuencia 1'
                color = { getRandomColor() }
                origin = { 0 }
                sequence = { sequence } 
                lineTension = { operation === AlgorithmFactory.FFT ? 10 : 0 }

            />
        </div>
    )
}

export default SequencesCharts;