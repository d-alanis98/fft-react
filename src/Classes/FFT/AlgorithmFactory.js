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

    //Creación del algoritmo correspondiente
    create(operation){
        switch(operation){
            case AlgorithmFactory.FFT:
                console.log('Se creará FFT');
                return new FFT(this.inputSamples);
            case AlgorithmFactory.IFFT:
                console.log('Se creará IFFT');
                return new IFFT(this.inputSamples);
            default:
                return new FFT(this.inputSamples);
        }
    }
}