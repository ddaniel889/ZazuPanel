import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLRepartComponent } from './detail-lrepart.component';

describe('DetailLRepartComponent', () => {
  let component: DetailLRepartComponent;
  let fixture: ComponentFixture<DetailLRepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLRepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLRepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
