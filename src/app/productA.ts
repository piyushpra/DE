export class producta {
    public productName: string;
    public productModel: string;
    public productPrice: number;

    constructor (productName:string, productModel:string, productPrice:number) {
        this.productName = productName;
        this.productModel = productModel;
        this.productPrice = productPrice;
    }
}