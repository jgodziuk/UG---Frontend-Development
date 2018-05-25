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

import { Smartphone } from "./smartphone";
import { RankedSmartphone } from "./rankedsmartphone";

let smartphone1 = new Smartphone('Samsung', 'Galaxy s9', 2018, 1000);
let smartphone2 = new RankedSmartphone('Xiaomi', 'Redmi 4x', 2017, 200, 7);

console.log(smartphone1.getFullInfo());
console.log(smartphone2.getFullInfo());

