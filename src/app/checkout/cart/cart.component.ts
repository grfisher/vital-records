import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, FormControl } from '@angular/forms';
import { BirthFormPagesService } from 'src/app/cert-birth/birth-form-pages.service';
import { DeceasedFormPagesService } from 'src/app/cert-deceased/deceased-form-pages.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  birthFormGroup: any;
  deceasedFormGroup: any;

  certType: string;
  certQty: any;

  constructor(
    birthFps: BirthFormPagesService, 
    deceasedFps: DeceasedFormPagesService) {
    this.birthFormGroup = birthFps.formPages.controls['certificate'];
    this.deceasedFormGroup = deceasedFps.formPages.controls['certificate'];
  }

  ngOnInit() {
    this.certType = this.birthFormGroup.controls['certType'].value;
    this.certQty = this.birthFormGroup.controls['certQty'].value;
  }
}