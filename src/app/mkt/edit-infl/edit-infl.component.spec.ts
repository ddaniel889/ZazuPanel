import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInflComponent } from './edit-infl.component';

describe('EditInflComponent', () => {
  let component: EditInflComponent;
  let fixture: ComponentFixture<EditInflComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInflComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
