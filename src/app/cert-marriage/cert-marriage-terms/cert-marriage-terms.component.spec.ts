import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertMarriageTermsComponent } from './cert-marriage-terms.component';

describe('CertMarriageTermsComponent', () => {
  let component: CertMarriageTermsComponent;
  let fixture: ComponentFixture<CertMarriageTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertMarriageTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertMarriageTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
