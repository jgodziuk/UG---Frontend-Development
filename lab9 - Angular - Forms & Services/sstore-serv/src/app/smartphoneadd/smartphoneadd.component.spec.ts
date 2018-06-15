import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneaddComponent } from './smartphoneadd.component';

describe('SmartphoneaddComponent', () => {
  let component: SmartphoneaddComponent;
  let fixture: ComponentFixture<SmartphoneaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartphoneaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphoneaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
