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

const routes: Routes = [
  { path: 'thank-you', component: ThankYouComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'review', component: CertBirthReviewComponent },
  { path: 'documents', component: CertBirthDocumentsComponent },
  { path: 'registrant', component: CertBirthRegistrantComponent },
  { path: 'requestor', component: CertBirthRequestorNavComponent },
  { path: 'terms', component: CertBirthTermsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: '',   redirectTo: '/shopping-cart', pathMatch: 'full' },
  { path: '**', component: ShoppingCartComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Add options right here
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }