import React from 'react';
import Member from './Member';

const Members = () => (
    <div className='my-3 py-3'>
        <h5>Integrantes:</h5>
        <div className='d-flex flex-row justify-content-center w-100'>
            <Member
                memberId = 'damian'
            />
            <Member
                memberId = 'josue'
                className = 'ml-3'
            />
            <Member
                memberId = 'vladimir'
                className = 'ml-3'
            />
        </div>
    </div>
);

export default Members;