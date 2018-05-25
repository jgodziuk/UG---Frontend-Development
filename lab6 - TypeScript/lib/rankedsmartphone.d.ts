import { Smartphone } from "./smartphone";
export declare class RankedSmartphone extends Smartphone {
    brandC: string;
    modelC: string;
    yearC: number;
    priceC: number;
    rankC: number;
    rank: number;
    constructor(brandC: string, modelC: string, yearC: number, priceC: number, rankC: number);
    getFullInfo(): string;
}
