
import { create, all } from 'mathjs';

const config = { };
const math = create(all, config);

const N_PI = math.pi;
const N_E = math.e;

export default class FFT{
    constructor(InputArray) {
        this.InputArray=InputArray;
        this.n=InputArray.length
    }
    /*
    Función que devuelve los items impares de un array (impares refiriéndonos a su índice, considerando el inicial como 
    i = 1)
    */
    getEven() {
        let output = [];
        for ( let i = 0 ; i < this.n ; i = i + 2 )
            output.push(this.InputArray[i]);
        return output;
    }

    /*    
    Función que devuelve los items pares de un array (pares refiriéndonos a su índice, por eso empezamos en a[1], que
    corresponde al segundo elemento del array, y vamos de 2 en 2)
    */
    getEven() {
        let output = [];
        for ( let i = 1 ; i < this.n ; i = i + 2 )
            output.push(this.InputArray[i]);
        return output;
    }    

    /*
    Transformada discreta de Fourier, implementada con un algoritmo de tipo iterativo, 
    recibe un array de tamaño 2^n con n > 0
    */
    getDFT() {
        let outoput,s,angle;
        outoput = [];
        for ( let k = 0; k < this.n ; k++ ) {
            s = math.complex(0);
            for ( let t = 0; t < this.n ; t++){
                //Se calcula angle = 2*-i*pi*t*k/n
                angle = 2 * math.complex(0,-1) * N_PI * t * k / this.n;
                s = s + this.InputArray[t] * ( math.pow(N_E,angle) );
                outoput.push(s);
            }
        }
        return outoput;
    }

    /*
    Transformada rápida de Fourier, implementada como algoritmo de tipo divide and conquer,
    recibe un array de tamaño 2^n con n > 0
    */
    //Falta por terminar
    getTRF() {
        let half = this.n / 2; //Considerando que len(arr) siempre será potencia de 2
        if ( n == 1 )
            return this.InputArray;
        let wn = math.pow(N_E,((-2 * N_PI * math.complex(0,1)) / this.n));
    }

}
