import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
//Context
import ResultContext from '../ResultContext';
//HOC
import withAlert from '../../../Components/Alerts/HOC/withAlert';



const withResult = WrappedComponent => {
    const WithResult = ({ history, location, setAlert, ...restProps }) => {
        let [result, setResult] = useContext(ResultContext);

        useEffect(() => {
            if(missingCalculations()){
                setAlert({
                    type: 'danger',
                    message: 'El resultado no ha sido calculado'
                })
                history.push('/preview')
            }
        }, [result])

        const missingCalculations = () => location.pathname !== '/preview' && result.resultSequence.length === 0;

        if(missingCalculations())
            return null;
        return <WrappedComponent 
                    result = { result }
                    sequence = { result.resultSequence }
                    operation = { result.operation }
                    setResult = { setResult }
                    inputSequence = { result.inputSequence }
                    { ...restProps }
                /> 
    }

    return withRouter(withAlert(WithResult));
}

export default withResult;