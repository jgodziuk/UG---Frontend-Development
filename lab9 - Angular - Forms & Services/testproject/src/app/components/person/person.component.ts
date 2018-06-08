import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import { Person } from '../../models/person.model';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  myForm: FormGroup;
  imie: AbstractControl;
  rokUr: AbstractControl;

  constructor(fb: FormBuilder, private personService: PersonService) { 
    this.myForm = fb.group({
      'imie': ['Podaj imie', Validators.compose([
        Validators.required, Validators.minLength(3), this.myImieValidator
      ])], 
      'rokUr': ['Podaj rok urodzenia', Validators.compose([
       Validators.min(1970)
      ])]
    });
    
    this.imie = this.myForm.controls['imie'];

    this.myForm.controls['imie'].valueChanges.subscribe(imie => console.log(imie));
  }

  ngOnInit() {
  }

  mySubmit(value: any){
    const person = new Person(this.imie.value, this.rokUr.value);

  }

  myImieValidator(control : FormControl){
    if(control.value.match(/^Bol/i)){
      return {
        'bolekValue': true
      }
    }
  }

}
