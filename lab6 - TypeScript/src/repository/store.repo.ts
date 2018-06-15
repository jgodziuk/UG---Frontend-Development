import { Store } from "../model/store";

export class StoreRepo {

    stores: Store[];

    constructor() {

    }

    public addStore(st: Store) {
        this.stores.push(st);
    }

    public getStoreByCity(mycity: string) {
        return this.stores.filter(st => st.city === mycity)[0];
    }
}