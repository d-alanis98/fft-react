
const COMMA_SEPARATOR = ',';

export default class InputFunction{
    constructor({ sequence, origin, periodic }){
        this.function = sequence;
        this.origin = origin;
        this.periodic = periodic;
    }

    static getInputAsArray = input => {
        let inputAsArray = input.split(COMMA_SEPARATOR);
        inputAsArray = inputAsArray.map(inputArrayEntry => Number(inputArrayEntry));
        return inputAsArray;
    }

    //Getters y setters
    setFunction = sequence => this.function = sequence;

    getFunction = () => this.function;

    setOrigin = origin => this.origin = origin;

    getOrigin = () => this.origin;

    setPeriodic = periodic => this.periodic = periodic;

    isPeriodic = () => this.periodic;
}