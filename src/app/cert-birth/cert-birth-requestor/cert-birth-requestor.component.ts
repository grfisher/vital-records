import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cert-birth-requestor',
  templateUrl: './cert-birth-requestor.component.html',
  styleUrls: ['./cert-birth-requestor.component.css']
})
export class CertBirthRequestorComponent implements OnInit {

  requestorFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.requestorFormGroup = this.formBuilder.group({
      'reqReason': [''],
      'reqRelationship': [''],
      'firstName': [''],
      'middleName': [''],
      'lastName': [''],

      'address1': [''],
      'address2': [''],
      'city': [''],
      'county': [''],
      'state': [''],
      'country': [''],

      'phone': [''],
      'email': [''],
      'emailConfirm': ['']
    });
  }

  ngOnInit(): void {
  }

}
