import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, ControlContainer } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cert-birth-registrant-nav',
  templateUrl: './cert-birth-registrant-nav.component.html',
  styleUrls: ['./cert-birth-registrant-nav.component.css']
})
export class CertBirthRegistrantNavComponent implements OnInit {

  registrantFormGroup: FormGroup;

  constructor(private containerForm: ControlContainer, @Inject(Router) private router: Router) { }

  ngOnInit() {
    this.registrantFormGroup = this.containerForm.control.get('registrant') as FormGroup;
  }

  validateForm() {
    this.registrantFormGroup.markAllAsTouched();
    this.registrantFormGroup.updateValueAndValidity({ onlySelf: true });

    if (this.registrantFormGroup.valid === false) {
      this.router.navigate(['/birthForms/registrant']);
    } else { 
      this.router.navigate(['/birthForms/documents']);
    }
  }
}
