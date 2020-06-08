import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertBirthRequestorComponent } from './cert-birth-requestor.component';

describe('CertBirthRequestorComponent', () => {
  let component: CertBirthRequestorComponent;
  let fixture: ComponentFixture<CertBirthRequestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertBirthRequestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertBirthRequestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
