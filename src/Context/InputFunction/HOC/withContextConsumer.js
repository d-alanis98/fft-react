import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
//Context
import FunctionsContext from '../FunctionsContext';
//HOC
import withAlert from '../../../Components/Alerts/HOC/withAlert';


const withContextConsumer = WrappedComponent => {
    const WithContextConsumer = props => {
        //HOOKS
        //State
        const [showDefaultAlert, setShowDefaultAlert] = useState(true);
        //Context
        let [functions, setFunctions] = useContext(FunctionsContext)
        
        //PROPS
        let { location, history, setAlert } = props;

        useEffect(() => {
            if(functionsNotDefined()){
                showDefaultAlert && setAlert({
                    type: 'danger',
                    message: 'No se han definido las funciones'
                });
                history.push('/start');
            }
        }, [functions])

        const functionsNotDefined = () => location.pathname !== '/start' && !functions;

        if(functionsNotDefined())
            return null;

        return <WrappedComponent
                    functions = { functions }
                    setAlert = { setAlert }
                    setFunctions = { setFunctions }
                    showDefaultAlert = { setShowDefaultAlert }
                    { ...props }
                />
    }
    return withRouter(withAlert(WithContextConsumer));
}

export default withContextConsumer;