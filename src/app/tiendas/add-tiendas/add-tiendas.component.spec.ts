import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTiendasComponent } from './add-tiendas.component';

describe('AddTiendasComponent', () => {
  let component: AddTiendasComponent;
  let fixture: ComponentFixture<AddTiendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTiendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTiendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
