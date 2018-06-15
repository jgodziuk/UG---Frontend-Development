import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Smartphone } from '../smartphone';
import 'rxjs/Rx';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  smartphonesDataBase: Smartphone[];
  searchField: FormControl;
  searches: Smartphone[];
  selectedSmartphone: Smartphone;

  ngOnInit() {
    this.readDatabase();

    this.searchField = new FormControl();

    this.searchField.valueChanges
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(term => {
        this.searches = this.smartphonesDataBase.filter(smartphone => smartphone.brand.toLowerCase().indexOf(term) > -1);
      });
  }

  readDatabase() {
    this.smartphonesDataBase = [
      new Smartphone( 'Samsung', "s9", 3000 ),
      new Smartphone( 'Samsung', "a1", 1200 ),
      new Smartphone( 'LG', "g7", 3600 ),
      new Smartphone( 'Xiaomi', "4x", 600 ),
      new Smartphone( 'Huawei', "p20", 3500 )
    ]
  }

  showSmartphone(index: number){
    this.selectedSmartphone = this.searches[index];
  }
}
