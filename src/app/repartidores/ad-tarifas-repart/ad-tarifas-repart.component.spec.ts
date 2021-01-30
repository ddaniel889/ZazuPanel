import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTarifasRepartComponent } from './ad-tarifas-repart.component';

describe('AdTarifasRepartComponent', () => {
  let component: AdTarifasRepartComponent;
  let fixture: ComponentFixture<AdTarifasRepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdTarifasRepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdTarifasRepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
