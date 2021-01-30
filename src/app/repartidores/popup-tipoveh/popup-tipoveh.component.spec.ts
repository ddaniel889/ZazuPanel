import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupTipovehComponent } from './popup-tipoveh.component';

describe('PopupTipovehComponent', () => {
  let component: PopupTipovehComponent;
  let fixture: ComponentFixture<PopupTipovehComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupTipovehComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupTipovehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
