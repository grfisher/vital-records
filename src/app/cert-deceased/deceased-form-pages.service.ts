import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DeceasedFormPagesService {

  formPages: FormGroup;

  constructor(fb: FormBuilder) {
    this.formPages = fb.group({
      certificate: fb.group({
        certType: fb.control('', Validators.required),
        certQty: fb.control('', Validators.required),
      }),
      terms: fb.group({
        signature: fb.control('', Validators.required),
      })
    });
  }

  submitFormToApi() {
    console.log(this.formPages.value);
  }
}
