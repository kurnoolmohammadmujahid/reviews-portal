import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFeedbackComponent } from './category-feedback.component';

describe('CategoryFeedbackComponent', () => {
  let component: CategoryFeedbackComponent;
  let fixture: ComponentFixture<CategoryFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
