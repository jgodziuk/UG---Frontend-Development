export class Smartphone {
    id: number;
    brand: string;
    model: string;
    price: number;

    constructor(brand: string, model: string, price){
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
  }
