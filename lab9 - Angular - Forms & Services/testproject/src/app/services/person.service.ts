import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';
import { AbstractControl } from '@angular/forms';

@Injectable()
export class PersonService {

  persons: Person[];
  
  constructor() {
    this.persons = [new Person("Jacek", 1994), new Person("Jan", 1980)];
  }

  getPersons(){
    return this.persons;
  }

  addPerson(person: Person){
    this.persons.push(person);
  }
}
