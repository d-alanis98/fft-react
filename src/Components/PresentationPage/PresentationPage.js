import React from 'react';
import { withRouter } from 'react-router-dom';
import SubmitButton from '../Layout/SubmitButton';
import Title from './Title';
import Members from './Members/Members';

const PresentationPage = ({ history }) => {

    const handleClick = event => {
        event.preventDefault();
        history.push('/start')
    }
    return(
        <div className='container text-center mt-3 py-4 text-main'>
            <Title />
            <Members />
            <SubmitButton
                onClick = { handleClick }
            >
                Comenzar
            </SubmitButton>
        </div>
    )
};

export default withRouter(PresentationPage);