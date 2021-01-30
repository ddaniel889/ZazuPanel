import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonificacionesrepComponent } from './bonificacionesrep.component';

describe('BonificacionesrepComponent', () => {
  let component: BonificacionesrepComponent;
  let fixture: ComponentFixture<BonificacionesrepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonificacionesrepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonificacionesrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
