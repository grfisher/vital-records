import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BirthFormPagesService {

  formPages: FormGroup;

  constructor(fb: FormBuilder) {
    this.formPages = fb.group({
      certificate: fb.group({
        certType: fb.control('', Validators.required),
        certQty: fb.control('', Validators.required),
      }),
      terms: fb.group({
        signature: fb.control('', Validators.required),
      }),
      requestor: fb.group({
        reqReason: fb.control('', Validators.required),
        reqRelationship: fb.control('', Validators.required),
        reqFirstName: fb.control('', Validators.required),
        reqMiddleName: fb.control(''),
        reqLastName: fb.control('', Validators.required),

        reqAddress1: fb.control('', Validators.required),
        reqAddress2: fb.control(''),
        reqCity: fb.control('', Validators.required),

        reqCounty: fb.control(''),
        reqState: fb.control('', Validators.required),
        reqCountry: fb.control(''),

        reqPhone: fb.control('', Validators.required),
        reqEmail: fb.control('', Validators.required),
        reqEmailConfirm: fb.control('', Validators.required)
      }),
      registrant: fb.group({
        regCertsReqd: fb.control('', Validators.required),
        regFirstName: fb.control('', Validators.required),
        regMiddleName: fb.control(''),

        regLastName: fb.control('', Validators.required),
        regDob: fb.control('', Validators.required),
        regGenderId: fb.control('', Validators.required),

        regCity: fb.control('', Validators.required),
        regCounty: fb.control('', Validators.required),
        regState: fb.control('', Validators.required),

        regDeceased: fb.control(false),
        regFirstName1: fb.control('', Validators.required),
        regMiddleName1: fb.control(''),
        regLastName1: fb.control('', Validators.required),
        regSuffix1: fb.control(''),

        regFirstName2: fb.control('', Validators.required),
        regMiddleName2: fb.control(''),
        regLastName2: fb.control('', Validators.required),
        regSuffix2: fb.control('')
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
