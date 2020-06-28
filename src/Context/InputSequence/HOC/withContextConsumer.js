import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
//Context
import SequenceContext from '../SequenceContext';
//HOC
import withAlert from '../../../Components/Alerts/HOC/withAlert';


const withContextConsumer = WrappedComponent => {
    const WithContextConsumer = props => {
        //HOOKS
        //State
        const [showDefaultAlert, setShowDefaultAlert] = useState(true);
        //Context
        let [sequence, setSequence] = useContext(SequenceContext)
        
        //PROPS
        let { location, history, setAlert } = props;

        useEffect(() => {
            if(sequenceNotDefined()){
                showDefaultAlert && setAlert({
                    type: 'danger',
                    message: 'No se han definido las funciones'
                });
                history.push('/start');
            }
        }, [sequence])

        const sequenceNotDefined = () => location.pathname !== '/start' && !sequence;

        if(sequenceNotDefined())
            return null;

        return <WrappedComponent
                    sequence = { sequence }
                    setAlert = { setAlert }
                    setSequence = { setSequence }
                    showDefaultAlert = { setShowDefaultAlert }
                    { ...props }
                />
    }
    //Decoramos con HOC de alertas
    let WithAlerts = withAlert(WithContextConsumer);
    //Decoramos con el HOC de router
    let WithRouter = withRouter(WithAlerts); 
    //Retornamos el componente decorado
    return WithRouter;
}

export default withContextConsumer;