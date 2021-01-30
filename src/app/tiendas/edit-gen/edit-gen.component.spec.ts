import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGenComponent } from './edit-gen.component';

describe('EditGenComponent', () => {
  let component: EditGenComponent;
  let fixture: ComponentFixture<EditGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
