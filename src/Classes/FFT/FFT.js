import Complex from 'complex.js';
import BaseAlgorithm from './BaseAlgorithm';

export default class FFT extends BaseAlgorithm{
    constructor(inputSamples){
        super(inputSamples);
    }

    calculate(){
        let result = this.algorithm(this.inputSamples);
        console.log(result.toString())
        return result;
    }
}