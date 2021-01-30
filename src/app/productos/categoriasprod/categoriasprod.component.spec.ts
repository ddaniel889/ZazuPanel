import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasprodComponent } from './categoriasprod.component';

describe('CategoriasprodComponent', () => {
  let component: CategoriasprodComponent;
  let fixture: ComponentFixture<CategoriasprodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriasprodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
