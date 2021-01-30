import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTarifasComponent } from './add-tarifas.component';

describe('AddTarifasComponent', () => {
  let component: AddTarifasComponent;
  let fixture: ComponentFixture<AddTarifasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTarifasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTarifasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
