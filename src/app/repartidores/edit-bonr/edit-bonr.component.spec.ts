import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBonrComponent } from './edit-bonr.component';

describe('EditBonrComponent', () => {
  let component: EditBonrComponent;
  let fixture: ComponentFixture<EditBonrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBonrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBonrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
