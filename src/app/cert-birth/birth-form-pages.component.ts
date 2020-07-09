import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BirthFormPagesService } from './birth-form-pages.service';

@Component({
  selector: 'app-form-pages',
  templateUrl: './birth-form-pages.component.html',
  styleUrls: ['./birth-form-pages.component.css']
})
export class BirthFormPagesComponent {
  forms: FormGroup;

  constructor(fps: BirthFormPagesService) {
    this.forms = fps.formPages;
  }

  onActivate(event) {
    window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
  }
}
