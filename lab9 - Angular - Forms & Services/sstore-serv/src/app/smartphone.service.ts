import { Injectable } from '@angular/core';
import { Smartphone } from './smartphone.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class SmartphoneService {

  smartphoneData: Smartphone[];

  constructor() {
    this.smartphoneData = [
      new Smartphone("Samsung", "s8", 2600),
      new Smartphone("LG", "g6", 2200),
      new Smartphone("iPhone", "x", 4300),
    ];
   }

   getSmartphones(): Observable<Array<Smartphone>> {
    return Observable.of(this.smartphoneData.sort((a: Smartphone, b: Smartphone) => {
      if (a.brand.toLowerCase() < b.brand.toLowerCase()) {
        return -1;
      } else {
        return 1;
      }
    }));
  }

   addSmartphone(newsm: Smartphone){
     this.smartphoneData.push(newsm);
   }

   isModelUnique(mymodel: String){
    return this.smartphoneData.filter(sm => sm.model === mymodel).length > 0;
   }
}
