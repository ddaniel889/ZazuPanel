import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComisionComponent } from './edit-comision.component';

describe('EditComisionComponent', () => {
  let component: EditComisionComponent;
  let fixture: ComponentFixture<EditComisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
