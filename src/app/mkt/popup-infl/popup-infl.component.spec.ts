import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupInflComponent } from './popup-infl.component';

describe('PopupInflComponent', () => {
  let component: PopupInflComponent;
  let fixture: ComponentFixture<PopupInflComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupInflComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupInflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
