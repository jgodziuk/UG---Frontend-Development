import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SmartphoneService } from '../smartphone.service';
import { Smartphone } from '../smartphone.model';

@Component({
  selector: 'app-smartphoneadd',
  templateUrl: './smartphoneadd.component.html',
  styleUrls: ['./smartphoneadd.component.css']
})
export class SmartphoneaddComponent implements OnInit {

  addSmartphoneForm: FormGroup;
  brand: AbstractControl;
  model: AbstractControl;
  price: AbstractControl;
  smartphonesList: Array<Smartphone> = [];

  constructor(private fb: FormBuilder, private smartphoneService: SmartphoneService) { }

  ngOnInit() {
    this.addSmartphoneForm = this.fb.group({
      'brand': ['', Validators.compose([
        Validators.required
      ])],
      'model': ['', Validators.compose([
        Validators.required,
        this.myBrandValidator
      ])],
      'price': ['', Validators.compose([
        Validators.required
      ])],
    });

    this.brand = this.addSmartphoneForm.controls['brand'];
    this.model = this.addSmartphoneForm.controls['model'];
    this.price = this.addSmartphoneForm.controls['price'];

    this.smartphoneService.getSmartphones().subscribe(items => {
      this.smartphonesList = items;
    });
  }

  myBrandValidator(control: FormControl) {

    var ss = new SmartphoneService();
    
    if (ss.isModelUnique(control.value)) {
      return {
        'isUnique': true
      };
    }
  }

  addSmartphone(value: any) {
    if(this.addSmartphoneForm.valid){
      let sma = new Smartphone(this.brand.value, this.model.value, this.price.value);
      this.smartphoneService.addSmartphone(sma);
      alert("New smartphone added successfully");
    }else{
      alert("Given smartphone data is invalid");
    }
  }
}
