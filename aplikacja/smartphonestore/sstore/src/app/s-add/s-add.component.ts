import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isNumber } from 'util';

import { Smartphone } from '../smartphone.model';
import { SServiceService } from '../s-service.service';
import { SListComponent } from '../s-list/s-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-s-add',
  templateUrl: './s-add.component.html',
  styleUrls: ['./s-add.component.css']
})
export class SAddComponent implements OnInit {

  @Output() formSubmitted = new EventEmitter<any>();
  newSmartphone: FormGroup;

  constructor(
    private formbuilder: FormBuilder, 
    private sService: SServiceService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.newSmartphone = this.formbuilder.group({
      id: ['', [Validators.required, this.validNumber]],
      brand: ['', [Validators.required]],
      model: ['', [Validators.required]],
      price: ['', [Validators.required, this.validNumber]]
    });
  }

  validNumber(val: FormControl) {
    if (val.value.match(/[0-9]/)) {
      return {
        'isNumber': true
      }
    }
  }

  onSubmit(formValue) {
    this.sService.sAdd(formValue).subscribe(res => {
      this.formSubmitted.emit();
      this.router.navigate(['list']);
    });
  }
}
