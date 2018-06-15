import { Smartphone } from "../model/smartphone";

export class SmartphoneRepo {

    smartphones: Smartphone[];

    constructor() {

    }

    public addSmartphone(sm: Smartphone) {
        this.smartphones.push(sm);
    }

    public getSmartphoneByBrand(mybrand: string) {
        return this.smartphones.filter(sm => sm.brand === mybrand)[0];
    }
}