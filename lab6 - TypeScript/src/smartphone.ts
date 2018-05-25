export class Smartphone{
    brand: string;
    model: string;
    year: number;
    price: number;

    constructor(public brandC: string, public modelC: string, public yearC: number, public priceC: number){
        this.brand = brandC;
        this.model = modelC;
        this.year = yearC;
        this.price = priceC;
    }

    getFullInfo(){
        return this.brand + " " + this.model +" smartphone (" + this.year + ") costs: " + this.price + " USD"; 
    }
}