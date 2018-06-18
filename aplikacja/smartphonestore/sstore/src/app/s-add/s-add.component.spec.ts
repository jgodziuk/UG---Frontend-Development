import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SAddComponent } from './s-add.component';

describe('SAddComponent', () => {
  let component: SAddComponent;
  let fixture: ComponentFixture<SAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
