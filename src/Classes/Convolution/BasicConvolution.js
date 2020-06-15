//Prototypes
Array.prototype.addZerosToEnd = function(zeros){
    return this.concat(new Array(zeros).fill(0));
}

Array.prototype.addZerosToStart = function(zeros){
    return (new Array(zeros).fill(0)).concat(this);
}


export default class BasicConvolution{

    constructor(firstFunctionProperties, secondFunctionProperties){
        this.firstFunctionProperties = firstFunctionProperties;
        this.secondFunctionProperties = secondFunctionProperties;
        //Obtenemos directamente las funciones para poder operar sobre ellas con mayor facilidad
        this.firstFunction = firstFunctionProperties.function;
        this.secondFunction = secondFunctionProperties.function;
        //Secuencia de resultado
        this.resultSequence = [];
    }

    //Propeidad de resultado vacío disponible para esta clase y las que hereden de esta
    static EMPTY_RESULT = {
        sequence: [],
        origin: 0,
        periodic: false,
    }


    //Helpers

    addZerosToArrayEnd = (array, zeros) => array.addZerosToEnd(zeros);

    getResultArrayLength = resultArray => resultArray[0].length;

    getLengthFixedArrays = arraysToFix => {
        let targetLength = this.getResultArrayLength(arraysToFix);
        return arraysToFix.map(array => array.addZerosToStart(targetLength - array.length))
    }

    getFirstSequencePeriod = () => this.firstFunctionProperties.periodic ? this.firstFunction.length : 0;

    getSecondSequencePeriod = () => this.secondFunctionProperties.periodic ? this.secondFunction.length : 0;


    //Algoritmo
    calculateResultSequenceOrigin = () => {
        return this.firstFunctionProperties.origin + this.secondFunctionProperties.origin;
    }

    areBothFunctionsPeriodic = () => this.firstFunctionProperties.periodic && this.secondFunctionProperties.periodic;

    isConvolutionResultPeriodic = () => {
        return this.firstFunctionProperties.periodic || this.secondFunctionProperties.periodic;
    }

    getConvolutionPeriod = () => {
        let firstFunctionPeriod = 0, secondFunctionPeriod = 0;
        if(this.firstFunctionProperties.periodic)
            firstFunctionPeriod = this.firstFunction.length;
        if(this.secondFunctionProperties.periodic)
            secondFunctionPeriod = this.secondFunction.length;
        return Math.max(firstFunctionPeriod, secondFunctionPeriod); //El periodo de la convolución será el periodo más grande
    }

    sumArrays = arraysToSum => {
        let resultArray = [];
        //Obtenemos el numero de posiciones a calcular (sumar), esto es la longitud del primer array aunque todos
        let resultArrayLength = this.getResultArrayLength(arraysToSum); //tienen la misma longitud en este punto pues ya fueron normalizados
        let numberOfArrays = arraysToSum.length; //EL numero de arreglos o 'filas' de la multiplicacion
        //Inicio del algoritmo
        for(let arrayPosition = 0; arrayPosition < resultArrayLength; arrayPosition++){
            let positionSum = 0;
            //Calculamos la suma de todos los elementos de los arrays de esa posicion especifica
            for(let arrayNumber = 0; arrayNumber < numberOfArrays; arrayNumber++)
                positionSum += arraysToSum[arrayNumber][arrayPosition]
            //La agregamos al array de resultados
            resultArray.push(positionSum)
        }
        return resultArray;
    }

    multiplicate = () => {
        let secondFunctionNumberOfItems = this.secondFunction.length;
        return this.secondFunction.map((secondFunctionItem, secondFunctionIndex) => {
            let parcialResultArray = this.firstFunction.map(firstFunctionItem => firstFunctionItem * secondFunctionItem)
            return parcialResultArray.addZerosToEnd(secondFunctionNumberOfItems - secondFunctionIndex - 1)
        })
    }



    calculate(errorCallback = null){
        try{
            let partialResultArray = this.multiplicate();
            let lengthFixedResultArray = this.getLengthFixedArrays(partialResultArray);
            this.resultSequence = this.sumArrays(lengthFixedResultArray);
        }
        catch(error){
            if(errorCallback && typeof(errorCallback) === 'function')
                errorCallback(error.message)
            return BasicConvolution.EMPTY_RESULT;
        }
        return{
            sequence: this.resultSequence,
            origin: this.calculateResultSequenceOrigin(),
            periodic: this.isConvolutionResultPeriodic()
        }
    }
}