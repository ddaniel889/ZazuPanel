import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportescaComponent } from './reportesca.component';

describe('ReportescaComponent', () => {
  let component: ReportescaComponent;
  let fixture: ComponentFixture<ReportescaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportescaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportescaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
