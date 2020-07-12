import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-cert-birth-requestor-nav',
  templateUrl: './cert-birth-requestor-nav.component.html',
  styleUrls: ['./cert-birth-requestor-nav.component.css']
})
export class CertBirthRequestorNavComponent implements OnInit {

  requestorFormGroup: FormGroup;

  constructor(private containerForm: ControlContainer) { }

  ngOnInit() {
    this.requestorFormGroup = this.containerForm.control.get('requestor') as FormGroup;
  }
}
