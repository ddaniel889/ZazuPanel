import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposRepartidoresComponent } from './tipos-repartidores.component';

describe('TiposRepartidoresComponent', () => {
  let component: TiposRepartidoresComponent;
  let fixture: ComponentFixture<TiposRepartidoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposRepartidoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposRepartidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
