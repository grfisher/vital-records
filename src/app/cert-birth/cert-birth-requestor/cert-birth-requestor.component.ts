import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-cert-birth-requestor',
  templateUrl: './cert-birth-requestor.component.html',
  styleUrls: ['./cert-birth-requestor.component.css']
})
export class CertBirthRequestorComponent implements OnInit {

  requestorFormGroup: FormGroup;

  constructor(private containerForm: ControlContainer) { }

  ngOnInit() {
    this.requestorFormGroup = this.containerForm.control.get('requestor') as FormGroup;
  }
}
