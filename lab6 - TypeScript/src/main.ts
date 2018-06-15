/*
//definicja interfejsu Person
interface Person {
    name: string;
}

//definicja klasy Student
class Student {
    constructor(public name: string, public surname: string, public indexNo: number){
        this.name = name;
        this.surname = surname;
        this.indexNo = indexNo;
    }

}

//funkcja z parametrem typu Person
function sayHello(person: Person){

    console.log("Hello " + person.name);
}

//obiekt
let osoba1 = {
                name: 'Ziutek',
            };
sayHello(osoba1);

//instancja klasy student
let student1 = new Student('Jurek', 'Nowak', 102030);
sayHello(student1);

//lista
let myList: Person[] = [osoba1, student1];

//tuple
let myTuple: [string, number] = ["Zenek", 1994];
console.log(myTuple[0]);

//enum
enum Color {Red, Green, Blue};
console.log(Color.Green);

//any - jakikolwiek typ
let something: any = 5;
something = "Test";
something = true;

//mozna nie podac typu, typ jest wtedy wnioskowany - w tym przypadku to bedzie number
let x = 3;
let someone = new Student('Adam', 'Malysz', 203040);
*/

import { Store } from "./model/store";
import { Smartphone } from "./model/smartphone";
import { SmartphoneRepo } from "./repository/smartphone.repo";
import { StoreRepo } from "./repository/store.repo";

export class Main {

    smartphoneRepo: SmartphoneRepo;
    storeRepo: StoreRepo;

    constructor() {
        
        this.smartphoneRepo = new SmartphoneRepo();
        this.storeRepo = new StoreRepo();

        this.smartphoneRepo.addSmartphone(new Smartphone("Samsung", "s8", 4000, true));
        this.smartphoneRepo.addSmartphone(new Smartphone("Samsung", "a1", 2100, true));
        this.smartphoneRepo.addSmartphone(new Smartphone("LG", "g6", 3200, false));

        this.storeRepo.addStore(new Store("Gdańsk", "Piastowska", true));
        this.storeRepo.addStore(new Store("Gdańsk", "Długa", true));

        let storeA = this.storeRepo.getStoreByCity("Gdańsk");
        let phoneA = this.smartphoneRepo.getSmartphoneByBrand("Samsung");

        console.log("s");
    }
}

