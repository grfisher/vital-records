import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BirthFormPagesService {

  formPages: FormGroup;

  constructor(fb: FormBuilder) {
    this.formPages = fb.group({
      terms: fb.group({
        signature: fb.control('', Validators.required),
      }),
      requestor: fb.group({
        reqReason: fb.control('', Validators.required),
        reqRelationship: fb.control('', Validators.required),
        firstName: fb.control('', Validators.required),
        middleName: fb.control('', Validators.required),
        lastName: fb.control('', Validators.required),

        address1: fb.control('', Validators.required),
        address2: fb.control('', Validators.required),
        city: fb.control('', Validators.required),

        county: fb.control('', Validators.required),
        state: fb.control('', Validators.required),
        country: fb.control('', Validators.required),

        phone: fb.control('', Validators.required),
        email: fb.control('', Validators.required),
        emailConfirm: fb.control('', Validators.required)
      }),
      registrant: fb.group({
        certsReqd: fb.control('', Validators.required),
        firstName: fb.control('', Validators.required),
        middleName: fb.control('', Validators.required),

        lastName: fb.control('', Validators.required),
        dob: fb.control('', Validators.required),
        genderId: fb.control('', Validators.required),

        city: fb.control('', Validators.required),
        county: fb.control('', Validators.required),
        state: fb.control('', Validators.required),

        deceased: fb.control('', Validators.required),
        firstName1: fb.control('', Validators.required),
        middleName1: fb.control('', Validators.required),
        lastName1: fb.control('', Validators.required),
        suffix1: fb.control('', Validators.required),
        firstName2: fb.control('', Validators.required),

        middleName2: fb.control('', Validators.required),
        lastName2: fb.control('', Validators.required),
        suffix2: fb.control('', Validators.required)
      }),
      stateDocument: fb.group({
        stateDocTitle: fb.control('', Validators.required),
        stateDocFileName: fb.control('', Validators.required)
        //description: fb.control('', Validators.required),
        //length: fb.control('', Validators.required)
      }),
      firstDocument: fb.group({
        firstDocTitle: fb.control('', Validators.required),
        firstDocFileName: fb.control('', Validators.required)
      }),
      secondDocument: fb.group({
        secondDocTitle: fb.control('', Validators.required),
        secondDocFileName: fb.control('', Validators.required)
      })
    });
  }

  submitFormToApi() {
    console.log(this.formPages.value);
  }
}
