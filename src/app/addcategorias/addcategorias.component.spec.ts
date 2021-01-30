import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcategoriasComponent } from './addcategorias.component';

describe('AddcategoriasComponent', () => {
  let component: AddcategoriasComponent;
  let fixture: ComponentFixture<AddcategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
