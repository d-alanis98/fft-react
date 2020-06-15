import React, { Fragment } from 'react';

const Sequence = ({ label, sequence, sequenceProperty }) => {
    const DEFAULT_PROPERTY = 'function';
    const printPeriodicIndicator = () =>  sequence.periodic ? '...' : '';

    const printSequence = () => {
        let sequenceArray = sequence[sequenceProperty || DEFAULT_PROPERTY];
        return sequenceArray.map((item, index) => {
            let className = 'text-dark'
            if(index === sequence.origin)
                className = 'text-primary font-weight-bold'
            return <span><em className={ className }>{ item }</em>{ index < sequenceArray.length ? ', ' : ''}</span>
        })
    }
    return(
        <Fragment>
            <h6>{ label }</h6>
            <p>[{ printPeriodicIndicator() } { printSequence() } { printPeriodicIndicator() }]</p>
        </Fragment>
    )
}

export default Sequence;