import BasicConvolution from "./BasicConvolution";

const PERIODIC_CONVOLUTION_ERROR_MESSAGE = 'Una (y solo una) de las funciones debe ser periódica';

Array.prototype.getArrayBlocks = function(itemsPerBlock){
    let numberOfArrayBlocks = Math.ceil(this.length / itemsPerBlock);
    return Array.from(new Array(numberOfArrayBlocks)).map((array, index) => {
        let blockStartIndex = index * itemsPerBlock;
        let blockEndIndex = blockStartIndex + itemsPerBlock;
        return this.slice(blockStartIndex, blockEndIndex);
    });
}


export default class PeriodicConvolution extends BasicConvolution{
    constructor(firstFunction, secondFunction){
        super(firstFunction, secondFunction);
    }

    static EMPTY_RESULT = BasicConvolution.EMPTY_RESULT;

    getNormalizedSequence = () => {
        let itemsPerBlock = this.getConvolutionPeriod();
        let convolutionLength = this.resultSequence.length;
        let modulo = convolutionLength % itemsPerBlock;
        //Si es itemsPerBlock divide exactamente a convolutionLength se retorna la secuencia completa pues no hay necesidad de agregar ceros
        if(modulo === 0)
            return this.resultSequence;
        //En caso contrario, se agregan los ceros necesarios al final de la secuencia
        let zerosToAdd = itemsPerBlock - modulo;
        //Se retirna el array con los ceros agregados al final
        return this.resultSequence.addZerosToEnd(zerosToAdd)
    }

    /**
     * @override
     */
    calculateResultSequenceOrigin = () => {
        let partialOrigin = this.firstFunctionProperties.origin + this.secondFunctionProperties.origin;
        let period = this.getConvolutionPeriod();
        return partialOrigin % period;
    }


    getBasicConvolution(){
        return super.calculate();
    }

    getPeriodicConvolution = () => {
        let period = this.getConvolutionPeriod();
        let normalizedSequence = this.getNormalizedSequence();
        let periodicResultBlocks = normalizedSequence.getArrayBlocks(period);
        return this.sumArrays(periodicResultBlocks)
    }

    /**
     * @override
     */
    calculate(errorCallback = null){
        let basicConvolutionResult = this.getBasicConvolution();
        if(!this.isConvolutionResultPeriodic() || this.areBothFunctionsPeriodic()){
            if(errorCallback && typeof(errorCallback) === 'function')
                errorCallback(PERIODIC_CONVOLUTION_ERROR_MESSAGE);
            return BasicConvolution.EMPTY_RESULT;
        }
        let periodicConvolutionResult = this.getPeriodicConvolution()
        return {
            ...basicConvolutionResult,
            sequence: periodicConvolutionResult
        };
    }
}