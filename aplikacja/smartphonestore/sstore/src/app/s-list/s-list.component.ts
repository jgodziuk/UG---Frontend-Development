import { Component, OnInit } from '@angular/core';
import { SServiceService } from '../s-service.service';
import { AbstractControl, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Smartphone } from '../smartphone.model';

@Component({
  selector: 'app-s-list',
  templateUrl: './s-list.component.html',
  styleUrls: ['./s-list.component.css']
})
export class SListComponent implements OnInit {

  selectedSmartphone: Smartphone;
  smartphonesList: Smartphone[] = [];

  constructor(private fb: FormBuilder, private sservice: SServiceService) {
    this.refresh();
  }

  ngOnInit() {
  }

  selectSmartphone(sm) {
    this.selectedSmartphone = sm;
  }

  public refresh() {
    this.smartphonesList.splice(0, this.smartphonesList.length);
    this.sservice.sList().subscribe((res: any[]) => {
      for (let c of res) {
        this.smartphonesList.push(new Smartphone(
          c.id,
          c.brand,
          c.model,
          c.price
        ));
      }
    });
  }

  refreshSmartphoneList(query: string) {
    this.smartphonesList = this.smartphonesList.filter(c => {
      return (c.id + '. ' + c.brand + ' ' + c.model + ' ' + c.price + ' PLN').toLocaleLowerCase().includes(query.toLocaleLowerCase());
    });
  }

  afterAdd() {
    this.refresh();
  }
}
