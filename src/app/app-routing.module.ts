import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart/shopping-cart.component';
import { CertBirthTermsComponent } from './cert-birth/cert-birth-terms/cert-birth-terms.component';
import { CertBirthRequestorNavComponent } from './cert-birth/cert-birth-requestor/cert-birth-requestor-nav.component';
import { CertBirthRegistrantComponent } from './cert-birth/cert-birth-registrant/cert-birth-registrant.component';
import { CertBirthDocumentsComponent } from './cert-birth/cert-birth-documents/cert-birth-documents.component';
import { CertBirthReviewComponent } from './cert-birth/cert-birth-review/cert-birth-review.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { CartComponent } from './checkout/cart/cart.component';
import { ThankYouComponent } from './checkout/thank-you/thank-you.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes = [
  { path: '', redirectTo: 'shopping-cart', pathMatch: 'full' },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'thank-you', component: ThankYouComponent },
  {
    path: 'birthForms',
    loadChildren: () => 
      import('./cert-birth/cert-birth.module').then(m => m.CertBirthModule)
  },
  {
    path: 'deceasedForms',
    loadChildren: () => 
      import('./cert-deceased/cert-deceased.module').then(m => m.CertDeceasedModule)
  },
  {
    path: 'marriageForms',
    loadChildren: () => 
      import('./cert-marriage/cert-marriage.module').then(m => m.CertMarriageModule)
  },
  { path: '**', redirectTo: 'shopping-cart' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Add options right here
    }),
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }