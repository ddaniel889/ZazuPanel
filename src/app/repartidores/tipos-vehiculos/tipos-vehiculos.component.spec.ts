import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposVehiculosComponent } from './tipos-vehiculos.component';

describe('TiposVehiculosComponent', () => {
  let component: TiposVehiculosComponent;
  let fixture: ComponentFixture<TiposVehiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposVehiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
