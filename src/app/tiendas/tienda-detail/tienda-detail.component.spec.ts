import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaDetailComponent } from './tienda-detail.component';

describe('TiendaDetailComponent', () => {
  let component: TiendaDetailComponent;
  let fixture: ComponentFixture<TiendaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
