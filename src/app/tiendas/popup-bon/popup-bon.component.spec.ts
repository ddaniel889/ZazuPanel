import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupBonComponent } from './popup-bon.component';

describe('PopupBonComponent', () => {
  let component: PopupBonComponent;
  let fixture: ComponentFixture<PopupBonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupBonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupBonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
