import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPComponent } from './edit-p.component';

describe('EditPComponent', () => {
  let component: EditPComponent;
  let fixture: ComponentFixture<EditPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
