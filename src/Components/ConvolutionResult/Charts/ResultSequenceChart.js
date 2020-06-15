import React from 'react';
//Componentes
import Chart from '../../Charts/Chart';

const ResultSequenceChart = ({ resultSequence, sequenceProperty }) => {
    const DEFAULT_PROPERTY = 'sequence';

    const isPeriodic = sequence => sequence.periodic;

    const addTwoPeriods = sequence => sequence.concat(sequence).concat(sequence);

    const getSequence = sequence => {
        let sequenceArray = sequence[sequenceProperty || DEFAULT_PROPERTY]
        if(!isPeriodic(sequence))
            return sequenceArray;
        return addTwoPeriods(sequenceArray);
    }

    return(
        <Chart 
            id = 'result_sequence_chart'
            label = 'Secuencia de resultado'
            color = '91, 99, 170'
            sequence = { getSequence(resultSequence) }
            origin = { resultSequence.origin }
        />
    )
}

export default ResultSequenceChart;