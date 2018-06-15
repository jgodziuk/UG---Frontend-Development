import { Component, OnInit, Input } from '@angular/core';
import { Smartphone } from '../smartphone';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() smartphone: Smartphone;

  constructor() { }

  ngOnInit() {
  }

}
