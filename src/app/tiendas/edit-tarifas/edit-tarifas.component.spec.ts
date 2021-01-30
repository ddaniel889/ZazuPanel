import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTarifasComponent } from './edit-tarifas.component';

describe('EditTarifasComponent', () => {
  let component: EditTarifasComponent;
  let fixture: ComponentFixture<EditTarifasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTarifasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTarifasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
