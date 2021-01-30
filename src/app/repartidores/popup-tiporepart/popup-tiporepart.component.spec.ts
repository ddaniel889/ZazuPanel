import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupTiporepartComponent } from './popup-tiporepart.component';

describe('PopupTiporepartComponent', () => {
  let component: PopupTiporepartComponent;
  let fixture: ComponentFixture<PopupTiporepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupTiporepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupTiporepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
