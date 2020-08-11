import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, ControlContainer } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cert-birth-requestor-nav',
  templateUrl: './cert-birth-requestor-nav.component.html',
  styleUrls: ['./cert-birth-requestor-nav.component.css']
})
export class CertBirthRequestorNavComponent implements OnInit {

  requestorFormGroup: FormGroup;

  constructor(private containerForm: ControlContainer, @Inject(Router) private router: Router) { }

  ngOnInit() {
    this.requestorFormGroup = this.containerForm.control.get('requestor') as FormGroup;
  }

  validateForm() {
    this.requestorFormGroup.markAllAsTouched();
    this.requestorFormGroup.updateValueAndValidity({ onlySelf: true });

    if (this.requestorFormGroup.valid === false) {
      this.router.navigate(['/birthForms/requestor']);
    } else { 
      this.router.navigate(['/birthForms/registrant']);
    }
  }
}
