import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipeModelComponent } from './add-recipe-model.component';

describe('AddRecipeModelComponent', () => {
  let component: AddRecipeModelComponent;
  let fixture: ComponentFixture<AddRecipeModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecipeModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
