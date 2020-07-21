import { Component, OnInit } from '@angular/core';
import { BirthFormPagesService } from 'src/app/cert-birth/birth-form-pages.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  forms: any;
  constructor(fps: BirthFormPagesService) {
    this.forms = fps.formPages;
  }

  ngOnInit(): void {

  }

  selectCertificate(certificate) {

    if (certificate === 'birth') {
      this.forms.get('certificate').get('certType').setValue('birth certificate');
      this.forms.get('certificate').get('certQty').setValue('1');
    } else if (certificate === 'deceased') {
      this.forms.get('certificate').get('certType').setValue('death certificate');
      this.forms.get('certificate').get('certQty').setValue('1');
    } else if (certificate === 'marriage') {
      this.forms.get('certificate').get('certType').setValue('marriage certificate');
      this.forms.get('certificate').get('certQty').setValue('1');
    }
  }


}
