import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLTiendaComponent } from './detail-ltienda.component';

describe('DetailLTiendaComponent', () => {
  let component: DetailLTiendaComponent;
  let fixture: ComponentFixture<DetailLTiendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLTiendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
