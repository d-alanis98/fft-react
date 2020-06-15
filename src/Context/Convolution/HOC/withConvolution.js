import React, { useContext, useEffect } from 'react';
//Context
import ConvolutionContext from '../ConvolutionContext';
import { withRouter } from 'react-router-dom';
import withAlert from '../../../Components/Alerts/HOC/withAlert';

const withConvolution = WrappedComponent => {
    const WithConvolution = props => {
        let [convolutionResult, setConvolutionResult] = useContext(ConvolutionContext);
        let { history, location, setAlert } = props;

        useEffect(() => {
            console.log({ convolutionResult })
        }, [])
        useEffect(() => {
            if(missingCalculations()){
                setAlert({
                    type: 'danger',
                    message: 'La convolución no ha sido calculada'
                })
                history.push('/preview')
            }
        }, [convolutionResult])

        const missingCalculations = () => location.pathname !== '/preview' && convolutionResult.sequence.length === 0;

        if(missingCalculations())
            return null;
        return <WrappedComponent 
                    convolutionResult = { convolutionResult }
                    setConvolutionResult = { setConvolutionResult }
                    { ...props }
                /> 
    }

    return withRouter(withAlert(WithConvolution));
}

export default withConvolution;