import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-cert-birth-registrant',
  templateUrl: './cert-birth-registrant.component.html',
  styleUrls: ['./cert-birth-registrant.component.css']
})
export class CertBirthRegistrantComponent implements OnInit {

  registrantFormGroup: FormGroup;

  constructor(private containerForm: ControlContainer) { }

  ngOnInit() {
    this.registrantFormGroup = this.containerForm.control.get('registrant') as FormGroup;
    //this.regDeceased = this.registrantFormGroup.get('regDeceased').value;
  }
}