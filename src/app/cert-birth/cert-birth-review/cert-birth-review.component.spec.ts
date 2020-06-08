import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertBirthReviewComponent } from './cert-birth-review.component';

describe('CertBirthReviewComponent', () => {
  let component: CertBirthReviewComponent;
  let fixture: ComponentFixture<CertBirthReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertBirthReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertBirthReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
