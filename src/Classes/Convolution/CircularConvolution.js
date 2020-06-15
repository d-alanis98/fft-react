import PeriodicConvolution from "./PeriodicConvolution";


const CIRCULAR_CONVOLUTION_ERROR_MESSAGE = 'Ambas funciones deben ser periódicas para aplicar convolución circular';


export default class CircularConvolution extends PeriodicConvolution{
    constructor(firstFunctionProperties, secondFunctionProperties){
        super(firstFunctionProperties, secondFunctionProperties);
    }

    calculate(errorCallback = null){
        let basicConvolutionResult = this.getBasicConvolution();
        if(!this.areBothFunctionsPeriodic()){
            if(errorCallback && typeof(errorCallback) === 'function')
                errorCallback(CIRCULAR_CONVOLUTION_ERROR_MESSAGE);
            return PeriodicConvolution.EMPTY_RESULT;
        }
        let periodicConvolutionResult = this.getPeriodicConvolution()
        return {
            ...basicConvolutionResult,
            sequence: periodicConvolutionResult
        };
        
    }
}