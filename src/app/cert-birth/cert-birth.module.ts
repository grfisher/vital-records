import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CertBirthTermsComponent } from './cert-birth-terms/cert-birth-terms.component';

import { CertBirthRequestorNavComponent } from './cert-birth-requestor/cert-birth-requestor-nav.component';
import { CertBirthRequestorComponent } from './cert-birth-requestor/cert-birth-requestor.component';

import { CertBirthRegistrantNavComponent } from './cert-birth-registrant/cert-birth-registrant-nav.component';
import { CertBirthRegistrantComponent } from './cert-birth-registrant/cert-birth-registrant.component';

import { CertBirthDocumentsNavComponent } from './cert-birth-documents/cert-birth-documents-nav.component';
import { CertBirthDocumentsComponent } from './cert-birth-documents/cert-birth-documents.component';

import { CertBirthReviewComponent } from './cert-birth-review/cert-birth-review.component';

import { CartComponent } from '../../app/checkout/cart/cart.component';
import { CheckoutComponent } from '../../app/checkout/checkout/checkout.component';
import { ThankYouComponent } from '../../app/checkout/thank-you/thank-you.component';

import { ShoppingCartComponent } from '../shopping-cart/shopping-cart/shopping-cart.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BirthFormPagesComponent } from './birth-form-pages.component';
import { FooterNavComponent } from '../shared/components/footer-nav/footer-nav.component';
import { SignaturePadComponent } from '../shared/components/signature-pad/signature-pad.component';


const routes = [
  {
    path: '',
    component: BirthFormPagesComponent,
    children: [
      { path: '', redirectTo: 'shopping' },
      {
        path: '/shopping', name: 'Shopping',
        component: ShoppingCartComponent
      },
      { path: 'terms', redirectTo: 'terms' },
      {
        path: 'terms',
        component: CertBirthTermsComponent
      },
      {
        path: 'requestor',
        component: CertBirthRequestorNavComponent
      },
      {
        path: 'registrant',
        component: CertBirthRegistrantNavComponent
      },
      {
        path: 'documents',
        component: CertBirthDocumentsNavComponent
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
    CertBirthRequestorNavComponent,
    CertBirthRequestorComponent,
    CertBirthRegistrantNavComponent,
    CertBirthRegistrantComponent,
    CertBirthDocumentsNavComponent,
    CertBirthDocumentsComponent,
    ShoppingCartComponent,
    CertBirthReviewComponent,
    BirthFormPagesComponent,
    FooterNavComponent,
    CertBirthDocumentsNavComponent,
    CertBirthRegistrantNavComponent,
    SignaturePadComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]

})
export class CertBirthModule { }
