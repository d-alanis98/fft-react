import React, { Fragment } from 'react';

const Sequence = ({ label, sequence }) => {

    const printSequence = () => {
        return sequence.map((item, index) => 
            <span>
                <em className='text-muted font-weight-bold'>{ item.toString() }</em>
                { index < sequence.length - 1 ? ', ' : ''}
            </span>
        )
    }
    return(
        <Fragment>
            <h6>{ label }</h6>
            <p>[{ printSequence() }]</p>
        </Fragment>
    )
}

export default Sequence;