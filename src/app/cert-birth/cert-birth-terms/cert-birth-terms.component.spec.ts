import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertBirthTermsComponent } from './cert-birth-terms.component';

describe('CertBirthTermsComponent', () => {
  let component: CertBirthTermsComponent;
  let fixture: ComponentFixture<CertBirthTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertBirthTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertBirthTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
