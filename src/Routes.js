import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PresentationPage from './Components/PresentationPage/PresentationPage';
import Result from './Components/Result/Result';
import InputSequenceContainer from './Components/InputSequence/InputSequenceContainer';
import FunctionPreviewContainer from './Components/FunctionPreview/FunctionPreviewContainer';

const Routes = () => {
    return(
        <Switch>
            <Route 
                path = '/' 
                exact 
                strict
            >
                <PresentationPage />
            </Route>
            <Route
                path = '/convolution-algorithms'
                exact
            >
                <PresentationPage />
            </Route>
            <Route
                path = '/start'
                exact
                strict
            >
                <InputSequenceContainer />
            </Route>
            <Route
                path = '/preview'
                exact
                strict
            >
                <FunctionPreviewContainer />
            </Route>
            <Route
                path = '/result'
                exact
                strict
            >
                <Result />
            </Route>
        </Switch>
    )
}

export default Routes;