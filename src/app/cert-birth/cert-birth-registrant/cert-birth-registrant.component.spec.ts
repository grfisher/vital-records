import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertBirthRegistrantComponent } from './cert-birth-registrant.component';

describe('CertBirthRegistrantComponent', () => {
  let component: CertBirthRegistrantComponent;
  let fixture: ComponentFixture<CertBirthRegistrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertBirthRegistrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertBirthRegistrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
