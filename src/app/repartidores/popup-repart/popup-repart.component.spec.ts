import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupRepartComponent } from './popup-repart.component';

describe('PopupRepartComponent', () => {
  let component: PopupRepartComponent;
  let fixture: ComponentFixture<PopupRepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupRepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupRepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
