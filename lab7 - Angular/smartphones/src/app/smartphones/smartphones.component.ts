import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css']
})
export class SmartphonesComponent implements OnInit {
  smartphone: Smartphone = {
    id: 1,
    brand: 'Samsung',
    model: 'Galaxy s8'
  };

  constructor() { }

  ngOnInit() {
  }

}
