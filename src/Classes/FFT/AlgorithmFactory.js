import Complex from 'complex.js';
//Clases
import FFT from './FFT';
import IFFT from './IFFT';

export default class AlgorithmFactory{
    //Constantes
    static FFT = 'FFT';
    static IFFT = 'IFFT';

    //Constructor
    constructor(inputSamples){
        this.inputSamples = this.getSamples(inputSamples);
        this.numberOfSamples = this.inputSamples.length;
    }

    getSamples(inputSamples){
        let samples = inputSamples.split(',');
        return samples.map(sample => Complex(sample));
    }

    /**
     * Determina si la secuencia introducida tiene 2^n elementos
     */
    isValidInput(){
        return Number.isInteger(Math.log2(this.numberOfSamples)) ? true : false;
    }

    //Creación del algoritmo correspondiente
    create(operation){
        //Validamos que la secuencia sea de tamaño 2^n
        if(!this.isValidInput())
            return null;
        //Devolvemos la instancia de acuerdo con la operación deseada
        switch(operation){
            case AlgorithmFactory.FFT:
                return new FFT(this.inputSamples);
            case AlgorithmFactory.IFFT:
                return new IFFT(this.inputSamples);
            default:
                return new FFT(this.inputSamples);
        }
    }
}