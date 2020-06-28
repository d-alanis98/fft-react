import Complex from 'complex.js';

export default class BaseAlgorithm{
    /**
     * @param {Complex[]} inputSamples 
     */
    constructor(inputSamples){
        this.inputSamples = inputSamples;
        this.numberOfSamples = this.inputSamples.length;
    }


    getEven(samples){
        return samples.filter((sample, index) => index % 2 === 0);
    }

    getOdd(samples){
        return samples.filter((sample, index) => index % 2 !== 0);
    }

    getWn(numberOfSamples, inverse = false){
        //Para la IFFT Wn = 2ipi/N, para la FFT Wn = -2ipi/N
        let weighing = inverse ? 1 : -1; 
        let realExponentPart = (2 * weighing * Math.PI) / numberOfSamples; //(-1|1)*2*pi/N
        let exponent = new Complex(0, realExponentPart); //realExponentPart * i (-2ipi/N)
        return exponent.exp(); //e^-2ipi/N
    }

    algorithm(samples, inverse = false){
        //Obtenemos el número de muestras (N)
        let numberOfSamples = samples.length
        //Obtenemos el índice que indica la mitad, considerando que N siempre será potencia de 2
        let half = numberOfSamples / 2 
        //Caso base, donde solo tenemos 1 elemento, entonces simplemente lo retorna
        if(numberOfSamples == 1)
            return samples
        //Obtenemos el peso w^1 de la secuencia
        let w = this.getWn(numberOfSamples, inverse)
        //Declaramos la variable que contendrá el acumulador de pesos para cada iteración
        let wn = new Complex(1, 0) //Inicializado en 1 (w^0)
        //Se separa el array en pares e impares
        let even = this.getEven(samples) 
        let odd = this.getOdd(samples)
        //Se obtiene cada mitad por el método de divide y vencerás (para formar la mariposa posteriormente)
        let sequenceEven = this.algorithm(even)
        let sequenceOdd = this.algorithm(odd)
        //Llenamos un array de tamaño N de ceros (de tipo complejo, 0 + 0j)
        let resultSequence = new Array(numberOfSamples).fill(new Complex(0, 0));
        //Ciclo para formar la mariposa y efectuar las operaciones en esta
        for(let iterator = 0; iterator < half; iterator++){
            //Obtenemos wn * fft(pares)
            let weightedOddSequence = sequenceOdd[iterator].mul(wn);
            //Primera mitad
            //De 0 a N/2 es fft(impares) + wn*fft(pares) 
            resultSequence[iterator] = sequenceEven[iterator].add(weightedOddSequence);
            //Segunda mitad
            //De N/2 a N es fft(impares) - wn*fft(pares)
            resultSequence[iterator + half] = sequenceEven[iterator].sub(weightedOddSequence); //Le restamos wn * fft(pares), ya que la parte par tiene una ponderación de -wn
            wn = wn.mul(w) //Se va acumulando wn, ya que en cada iteración w se eleva a la potencia iterator, esto sería lo mismo que wn = w ^ iterator
        }

        return resultSequence  
    }

    calculate(){
        let result  = this.algorithm(this.inputSamples);
        console.log(result.toString())
        return result
    }
}