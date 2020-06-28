import BaseAlgorithm from "./BaseAlgorithm";
import BaseAlgorithm from './BaseAlgorithm';

export default class IFFT extends BaseAlgorithm{
    constructor(inputSamples){
        super(inputSamples);
    }

    calculate(){
        let partialResult = this.algorithm(this.inputSamples, inverse = true);
        let result = (1 / this.numberOfSamples) * partialResult;
        console.log(result.toString())
        return result;
    }
}