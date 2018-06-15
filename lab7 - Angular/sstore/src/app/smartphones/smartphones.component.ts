import { Component, OnInit } from '@angular/core';
import { Smartphone } from '../classes/smartphone';
import { SmartphonesMock } from '../classes/smartphonesMock';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css']
})
export class SmartphonesComponent implements OnInit {

  smartphones: Smartphone = {
    id: 1,
    brand: "iPhone",
    model: "X",
    price: 4000 
  };

  smartphonesList = SmartphonesMock;
  selected: Smartphone;

  constructor() { 

  }

  ngOnInit() {
  }

  onSelect(sm: Smartphone): void { 
    this.selected = sm;
  }
}
