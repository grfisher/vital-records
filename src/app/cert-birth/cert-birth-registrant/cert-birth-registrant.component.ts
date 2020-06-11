import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cert-birth-registrant',
  templateUrl: './cert-birth-registrant.component.html',
  styleUrls: ['./cert-birth-registrant.component.css']
})
export class CertBirthRegistrantComponent implements OnInit {

  registrantFormGroup: FormGroup;

    listOfOptions: [
      {'name': 'some name 1', ID: 'D1', 'checked': true},
      {'name': 'some name 2', ID: 'D2', 'checked': false}
    ];

    constructor(private formBuilder: FormBuilder) { 
      this.registrantFormGroup = this.formBuilder.group({
        'certsReqd': [''],
        'firstName': [''],
        'middleName': [''],
        'lastName': [''],
        'dob': [''],
        'genderId': [''],
        'city': [''],
        'county': [''],
        'state': [''],
        'deceasedControl': [''],
        'firstName1': [''],
        'middleName1': [''],
        'lastName1': [''],
        'suffix1': [''],
        'firstName2': [''],
        'middleName2': [''],
        'lastName2': [''],
        'suffix2': ['']
      });
    }

  ngOnInit(): void {
  }

}
