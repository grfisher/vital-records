import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CertBirthTermsComponent } from './cert-birth-terms/cert-birth-terms.component';
import { CertBirthRequestorComponent } from './cert-birth-requestor/cert-birth-requestor.component';
import { CertBirthRegistrantComponent } from './cert-birth-registrant/cert-birth-registrant.component';
import { CertBirthDocumentsComponent } from './cert-birth-documents/cert-birth-documents.component';
import { CertBirthReviewComponent } from './cert-birth-review/cert-birth-review.component';

import { CartComponent } from '../../app/checkout/cart/cart.component';
import { CheckoutComponent } from '../../app/checkout/checkout/checkout.component';
import { ThankYouComponent } from '../../app/checkout/thank-you/thank-you.component';

import { ShoppingCartComponent } from '../shopping-cart/shopping-cart/shopping-cart.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BirthFormPagesComponent } from './birth-form-pages.component';


const routes = [
  {
    path: '',
    component: BirthFormPagesComponent,
    children: [
      { path: '', redirectTo: 'shopping' },
      {
        path: 'shopping',
        component: ShoppingCartComponent
      },
      { path: 'terms', redirectTo: 'terms' },
      {
        path: 'terms',
        component: CertBirthTermsComponent
      },
      {
        path: 'requestor',
        component: CertBirthRequestorComponent
      },
      {
        path: 'registrant',
        component: CertBirthRegistrantComponent
      },
      {
        path: 'documents',
        component: CertBirthDocumentsComponent
      },
      {
        path: 'review',
        component: CertBirthReviewComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      },
      {
        path: 'thank-you',
        component: ThankYouComponent
      },
      { path: '**', redirectTo: 'shopping' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CertBirthTermsComponent,
    CertBirthRequestorComponent,
    CertBirthRegistrantComponent,
    CertBirthDocumentsComponent,
    ShoppingCartComponent,
    CertBirthReviewComponent,
    BirthFormPagesComponent],
    providers: [],
    bootstrap: [CertBirthDocumentsComponent]
})
export class CertBirthModule { }
