import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-cert-birth-registrant-nav',
  templateUrl: './cert-birth-registrant-nav.component.html',
  styleUrls: ['./cert-birth-registrant-nav.component.css']
})
export class CertBirthRegistrantNavComponent implements OnInit {

  registrantFormGroup: FormGroup;

    /* listOfOptions: [
      {'name': 'some name 1', ID: 'D1', 'checked': true},
      {'name': 'some name 2', ID: 'D2', 'checked': false}
    ]; */

    constructor(private containerForm: ControlContainer) { }

  ngOnInit() {
    this.registrantFormGroup = this.containerForm.control.get('registrant') as FormGroup;
  }
}
