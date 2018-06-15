import { Smartphone } from "./smartphone";

export class Store {
    
    public stuff: Smartphone[];
  
    constructor(public city: string, public street: string, public isOpen: boolean) {

    }

    public addSmartphone(sm: Smartphone) {
        this.stuff.push(sm);
    }

    public getSmartphones() {
        for (let sm of this.stuff) {
            console.log(`\n${sm.brand} ${sm.model}`);
        }
    }
}