import { Smartphone } from "./smartphone";

export class RankedSmartphone extends Smartphone{
    rank: number;
    constructor(public brandC: string, public modelC: string, public yearC: number, public priceC: number, public rankC: number){
        super(brandC, modelC, yearC, priceC);
        this.rank = rankC;
    }

    getFullInfo(){
        return this.brand + " " + this.model +" smartphone (" + this.year + ") costs: " + this.price + " USD. Ranked: " + this.rank; 
    }
}

