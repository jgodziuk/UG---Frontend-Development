let data = [{
    id: 1,
    brand: "Samsung",
    model: "Galaxy s9",
    price: 3500,
    available: true
},
{
    id: 2,
    brand: "Apple",
    model: "iPhone X",
    price: 3800,
    available: true
}];

class Address {
    
    constructor(city, street, isOpen) {
        this.city = city;
        this.street = street;
        this.isOpen = isOpen ? '(Open now)' : '(Closed)';
    }

    getAddress() {
        return `${this.street} ${this.city} ${this.isOpen}`;
    };
}

class SmartphoneStore extends Address {

    constructor(city, street, isOpen, data) {
        super(city, street, isOpen);
        this.smartphones = data;
    }

    add(smartphone) {
        this.smartphones.push(smartphone);
    }
    getAll() {
        return this.smartphones;
    }
    getCheaperThan(maxPrice) {
        return this.smartphones.filter(smartphone => {
            return smartphone.price < maxPrice;
        });
    }
    getSmartphoneById(newid) {
        return this.smartphones.filter(smartphone => {
            return smartphone.id === newid;
        });
    }
    buySmartphone(id) {
        return this.smartphones.find(smartphone => {
            return smartphone.id === id;
        });
    }
    updateSmartphone(newSmartphone) {
        let _self = this;
        for (let smartphone of _self.smartphones) {
            if (smartphone.id === newSmartphone.id) {
                smartphone = newSmartphone;
                break;
            }
        }
    }
    removeSmartphone(smartphone) {
        this.smartphones.pop(movie);
    }
}


let store1 = new Address("Gdansk", 'Pilotów 18', false);
console.log(store1.getAddress());

let store2 = new Address("Warszawa", 'Marynarska 10', true);
console.log(store2.getAddress());

let store3 = new SmartphoneStore("Poznan", 'Slupska 70', true, data);
console.log(store3.getCheaperThan(3700));
