import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RrepartidoresComponent } from './rrepartidores.component';

describe('RrepartidoresComponent', () => {
  let component: RrepartidoresComponent;
  let fixture: ComponentFixture<RrepartidoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrepartidoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrepartidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
