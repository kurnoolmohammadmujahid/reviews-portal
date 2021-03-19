import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCategoryComponent } from './review-category.component';

describe('ReviewCategoryComponent', () => {
  let component: ReviewCategoryComponent;
  let fixture: ComponentFixture<ReviewCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
