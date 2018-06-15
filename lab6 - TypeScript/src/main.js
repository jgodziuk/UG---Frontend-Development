"use strict";
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
exports.__esModule = true;
var store_1 = require("./model/store");
var smartphone_1 = require("./model/smartphone");
var smartphone_repo_1 = require("./repository/smartphone.repo");
var store_repo_1 = require("./repository/store.repo");
var Main = /** @class */ (function () {
    function Main() {
        
        console.log("s");
        this.smartphoneRepo = new smartphone_repo_1.SmartphoneRepo();
        this.storeRepo = new store_repo_1.StoreRepo();
        this.smartphoneRepo.addSmartphone(new smartphone_1.Smartphone("Samsung", "s8", 4000, true));
        this.smartphoneRepo.addSmartphone(new smartphone_1.Smartphone("Samsung", "a1", 2100, true));
        this.smartphoneRepo.addSmartphone(new smartphone_1.Smartphone("LG", "g6", 3200, false));
        this.storeRepo.addStore(new store_1.Store("Gdańsk", "Piastowska", true));
        this.storeRepo.addStore(new store_1.Store("Gdańsk", "Długa", true));
        var storeA = this.storeRepo.getStoreByCity("Gdańsk");
        var phoneA = this.smartphoneRepo.getSmartphoneByBrand("Samsung");
        // user1.addMovieToLibrary(movie2);
        // user1.listUserLibrary();
    }
    return Main;
}());
exports.Main = Main;
