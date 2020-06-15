import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PresentationPage from './Components/PresentationPage/PresentationPage';
import ConvolutionResult from './Components/ConvolutionResult/ConvolutionResult';
import FunctionInputContainer from './Components/FunctionInput/FunctionInputContainer';
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
                <FunctionInputContainer />
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
                <ConvolutionResult />
            </Route>
        </Switch>
    )
}

export default Routes;