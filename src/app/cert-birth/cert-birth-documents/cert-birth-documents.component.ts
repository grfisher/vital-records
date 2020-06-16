import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-cert-birth-documents',
  templateUrl: './cert-birth-documents.component.html',
  styleUrls: ['./cert-birth-documents.component.css']
})
export class CertBirthDocumentsComponent implements OnInit {

  stateFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  firstFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  secondFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  showStateDocForm = false;
  showFirstDocForm = false;
  showSecondDocForm = false;

  stateDocBtnName: any = 'Upload State Document';
  firstDocBtnName: any = 'Upload First Document';
  secondDocBtnName: any = 'Upload Second Document';

  marked = false;
  theCheckbox = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

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

  submit() {
    const formData = new FormData();
    formData.append('file', this.stateFormGroup.get('fileSource').value);

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

  toggleVisibility(e){
    this.marked= e.target.checked;
  }
}


