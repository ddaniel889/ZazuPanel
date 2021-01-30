import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBontComponent } from './edit-bont.component';

describe('EditBontComponent', () => {
  let component: EditBontComponent;
  let fixture: ComponentFixture<EditBontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
