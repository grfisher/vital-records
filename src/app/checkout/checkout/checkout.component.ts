import { Component, OnInit } from '@angular/core';
import { BirthFormPagesService } from 'src/app/cert-birth/birth-form-pages.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  forms: any;
  url = 'http://httbin.org/post';
  json;

  postData = {
    test: this.forms,
  };

  constructor(fps: BirthFormPagesService, private http: HttpClient) {
    this.forms = fps.formPages;
    this.http.post(this.url, this.postData).toPromise().then((data:any) => {
      console.log(data);
      this.json = JSON.stringify(data.json);
    });
  }

  ngOnInit(): void {
  }

}
