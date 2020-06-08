import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertBirthDocumentsComponent } from './cert-birth-documents.component';

describe('CertBirthDocumentsComponent', () => {
  let component: CertBirthDocumentsComponent;
  let fixture: ComponentFixture<CertBirthDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertBirthDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertBirthDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
