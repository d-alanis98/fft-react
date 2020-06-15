import React from 'react';
//Componentes
import Chart from '../../Charts/Chart';
import Sequence from '../../Sequence/Sequence';

const SequencesCharts = ({ firstSequence, secondSequence, sequenceProperty }) => {
    const DEFAULT_PROPERTY = 'function';

    const isPeriodic = sequence => sequence.periodic;

    const addTwoPeriods = sequence => sequence.concat(sequence).concat(sequence);

    const getSequence = sequence => {
        let sequenceArray = sequence[sequenceProperty || DEFAULT_PROPERTY]
        if(!isPeriodic(sequence))
            return sequenceArray;
        return addTwoPeriods(sequenceArray);
    }

    return(
        <div className='row text-center mx-0'>
            <div className='col-xl-6 col-lg-12'>
                <Sequence
                    label = 'Secuencia 1:'
                    sequence = { firstSequence }
                />
                <Chart 
                    id = 'first_sequence_chart'
                    label = 'Secuencia 1'
                    color = '255, 0, 255'
                    sequence = { getSequence(firstSequence) }
                    origin = { firstSequence.origin }
                />
            </div>
            <div className='col-xl-6 col-lg-12'>
                <Sequence
                    label = 'Secuencia 2:'
                    sequence = { secondSequence }
                />
                <Chart 
                    id = 'second_sequence_chart'
                    label = 'Secuencia 2'
                    color = '255, 255, 0'
                    sequence = { getSequence(secondSequence) }
                    origin = { secondSequence.origin }
                />
            </div>
        </div>
    )
}

export default SequencesCharts;