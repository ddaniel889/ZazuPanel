import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdProductosComponent } from './ad-productos.component';

describe('AdProductosComponent', () => {
  let component: AdProductosComponent;
  let fixture: ComponentFixture<AdProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
