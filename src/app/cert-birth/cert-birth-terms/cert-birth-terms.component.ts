import { Component, OnInit, Inject } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-cert-birth-terms',
  templateUrl: './cert-birth-terms.component.html',
  styleUrls: ['./cert-birth-terms.component.css']
})
export class CertBirthTermsComponent implements OnInit {
  signatureFormGroup: FormGroup;
  route: Route;
  signatureValue: any;

  constructor(private containerForm: ControlContainer, @Inject(Router) private router: Router) { }

  ngOnInit(): void {
    this.signatureFormGroup = this.containerForm.control.get('terms') as FormGroup;
  }

  validateForm() {

    //this.signatureFormGroup.markAsTouched();
    this.signatureFormGroup.controls['signature'].updateValueAndValidity();
    if (this.signatureFormGroup.valid === false) {
      this.signatureFormGroup.controls['signature'].updateValueAndValidity();
      this.router.navigate(['/birthForms/terms']);
    } else {
      this.router.navigate(['/birthForms/requestor']);
    }

    this.signatureValue = this.signatureFormGroup.get('signature');
  }
}
