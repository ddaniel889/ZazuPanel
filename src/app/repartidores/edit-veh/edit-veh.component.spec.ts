import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVehComponent } from './edit-veh.component';

describe('EditVehComponent', () => {
  let component: EditVehComponent;
  let fixture: ComponentFixture<EditVehComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVehComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
