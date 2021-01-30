import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupBonrepartComponent } from './popup-bonrepart.component';

describe('PopupBonrepartComponent', () => {
  let component: PopupBonrepartComponent;
  let fixture: ComponentFixture<PopupBonrepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupBonrepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupBonrepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
