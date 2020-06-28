import BaseAlgorithm from "./BaseAlgorithm";
import Complex from "complex.js";

export default class IFFT extends BaseAlgorithm{
    constructor(inputSamples){
        super(inputSamples);
    }

    getNormalizedResult(partialResult){
        //El coeficiente 1/N que multiplica a cada elemento del vector resultado
        let coefficient =  new Complex(1 / this.numberOfSamples);
        //Retornamos una copia del array de resultado parcial con cada item multiplicado por 1/N y con sus 3 posiciones decimales redondeadas
        return partialResult.map(item => coefficient.mul(item).round(3));
    }


    calculate(){
        let partialResult = this.algorithm(this.inputSamples, true);
        let result = this.getNormalizedResult(partialResult);
        return result;
    }
}