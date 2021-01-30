import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCampComponent } from './popup-camp.component';

describe('PopupCampComponent', () => {
  let component: PopupCampComponent;
  let fixture: ComponentFixture<PopupCampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupCampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
