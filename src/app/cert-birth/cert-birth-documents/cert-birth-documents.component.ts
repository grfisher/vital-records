import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, ControlContainer} from '@angular/forms';

@Component({
  selector: 'app-cert-birth-documents',
  templateUrl: './cert-birth-documents.component.html',
  styleUrls: ['./cert-birth-documents.component.css']
})
export class CertBirthDocumentsComponent implements OnInit {

  stateFormGroup: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  // Initial states
  showStateDocForm = false;
  showFirstDocForm = false;
  showSecondDocForm = false;

  // Upload buttons
  stateDocBtnName: any = 'Upload State Document';
  firstDocBtnName: any = 'Upload First Document';
  secondDocBtnName: any = 'Upload Second Document';

  // Checkbox
  chckBxMarked = false;

  constructor(private http: HttpClient, private containerForm: ControlContainer) { }

  ngOnInit() {
    this.stateFormGroup = this.containerForm.control.get('stateDocument') as FormGroup;
    this.firstFormGroup = this.containerForm.control.get('firstDocument') as FormGroup;
    this.secondFormGroup = this.containerForm.control.get('secondDocument') as FormGroup;
  }

  get stateForm() {
    return this.stateFormGroup.controls;
  }

  get firstForm() {
    return this.firstFormGroup.controls;
  }

  get secondForm() {
    return this.secondFormGroup.controls;
  }

  onStateFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.stateFormGroup.patchValue({
        fileSource: file
      });
    }
  }

  onFirstFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.firstFormGroup.patchValue({
        fileSource: file
      });
    }
  }

  onSecondFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.secondFormGroup.patchValue({
        fileSource: file
      });
    }
  }

  submitForm(fileName) {
    const formData = new FormData();

    if (fileName === 'stateDocFileName') {
      formData.append('file', this.stateFormGroup.get('stateDocFileName').value);
    } else if (fileName === 'firstDocFileName') {
      formData.append('file', this.stateFormGroup.get('firstDocFileName').value);
    } else if (fileName === 'secondDocFileName') {
      formData.append('file', this.stateFormGroup.get('secondDocFileName').value);
    }

    this.http.post('http://localhost:8001/upload.php', formData)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      });
  }

  stateDocToggle() {
    this.showStateDocForm = !this.showStateDocForm;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.showStateDocForm) {
      this.stateDocBtnName = 'Hide This';
    } else {
      this.stateDocBtnName = 'Upload State Issued ID';
    }
  }

  firstDocToggle() {
    this.showFirstDocForm = !this.showFirstDocForm;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.showFirstDocForm) {
      this.firstDocBtnName = 'Hide This';
    } else {
      this.firstDocBtnName = 'Upload First Document';
    }
  }

  secondDocToggle() {
    this.showSecondDocForm = !this.showSecondDocForm;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.showSecondDocForm) {
      this.secondDocBtnName = 'Hide This';
    } else {
      this.secondDocBtnName = 'Upload Second Document';
    }
  }

  // Checkbox toggle
  toggleVisibility(e, docType) {
    if ((docType === 'state') && (e.target.checked)) {
      this.stateFormGroup.get('stateDocTitle').setValue('');
    } else if ((docType === 'first') && (e.target.checked)) {
      this.firstFormGroup.get('firstDocTitle').setValue('');
    } else if ((docType === 'second') && (e.target.checked)) {
      this.secondFormGroup.get('secondDocTitle').setValue('');
    }
  }
}
