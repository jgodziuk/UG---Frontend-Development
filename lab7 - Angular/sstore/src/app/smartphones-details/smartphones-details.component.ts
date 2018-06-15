import { Component, OnInit, Input } from '@angular/core';
import { Smartphone } from '../classes/smartphone';

@Component({
  selector: 'app-smartphones-details',
  templateUrl: './smartphones-details.component.html',
  styleUrls: ['./smartphones-details.component.css']
})
export class SmartphonesDetailsComponent implements OnInit {

  @Input() smartphone: Smartphone;

  constructor() { }

  ngOnInit() {
  }

}
