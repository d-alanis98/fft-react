import BasicConvolution from "./BasicConvolution";
import PeriodicConvolution from "./PeriodicConvolution";
import CircularConvolution from "./CircularConvolution";


export default class ConvolutionFactory{
    static BASIC    = 'BASIC';
    static PERIODIC = 'PERIODIC';
    static CIRCULAR = 'CIRCULAR';

    constructor(type, firstFunctionProperties, secondFunctionProperties){
        this.type = type;
        this.firstFunction = firstFunctionProperties;
        this.secondFunction = secondFunctionProperties;
    }

    create = () => {
        let convolutionAlgorithm;
        switch(this.type){
            case ConvolutionFactory.BASIC:
                convolutionAlgorithm = new BasicConvolution(this.firstFunction, this.secondFunction);
                break;
            case ConvolutionFactory.PERIODIC:
                convolutionAlgorithm = new PeriodicConvolution(this.firstFunction, this.secondFunction);
                break;
            case ConvolutionFactory.CIRCULAR:
                convolutionAlgorithm = new CircularConvolution(this.firstFunction, this.secondFunction);
                break;
            default:
                convolutionAlgorithm = null;
        }
        return convolutionAlgorithm;
    }
}