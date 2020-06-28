import Complex from 'complex.js';
import BaseAlgorithm from './BaseAlgorithm';

export default class FFT extends BaseAlgorithm{
    constructor(inputSamples){
        super(inputSamples);
    }

    getNormalizedResult(partialResult){
        return partialResult.map(item => item.round(3));
    }

    calculate(){
        let partialResult = this.algorithm(this.inputSamples);
        let result = this.getNormalizedResult(partialResult);
        return result;
    }
}