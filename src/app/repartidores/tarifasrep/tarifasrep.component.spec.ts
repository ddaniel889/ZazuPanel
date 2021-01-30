import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifasrepComponent } from './tarifasrep.component';

describe('TarifasrepComponent', () => {
  let component: TarifasrepComponent;
  let fixture: ComponentFixture<TarifasrepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifasrepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifasrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
