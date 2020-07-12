import { Component, OnInit } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-cert-birth-review',
  templateUrl: './cert-birth-review.component.html',
  styleUrls: ['./cert-birth-review.component.css']
})
export class CertBirthReviewComponent implements OnInit {
  stateFormGroup: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  requestorFormGroup: FormGroup;
  registrantFormGroup: FormGroup;

  constructor(private containerForm: ControlContainer) { }

  ngOnInit() {
    this.stateFormGroup = this.containerForm.control.get('stateDocument') as FormGroup;
    this.firstFormGroup = this.containerForm.control.get('firstDocument') as FormGroup;
    this.secondFormGroup = this.containerForm.control.get('secondDocument') as FormGroup;
    this.requestorFormGroup = this.containerForm.control.get('requestor') as FormGroup;
    this.registrantFormGroup = this.containerForm.control.get('registrant') as FormGroup;
  }
}
