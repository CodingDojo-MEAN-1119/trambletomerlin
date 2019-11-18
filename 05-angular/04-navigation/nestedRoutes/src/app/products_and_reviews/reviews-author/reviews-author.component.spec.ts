import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsAuthorComponent } from './reviews-author.component';

describe('ReviewsAuthorComponent', () => {
  let component: ReviewsAuthorComponent;
  let fixture: ComponentFixture<ReviewsAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
