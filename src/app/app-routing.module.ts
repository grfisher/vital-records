import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart/shopping-cart.component';
import { CertBirthTermsComponent } from './cert-birth/cert-birth-terms/cert-birth-terms.component';
import { CertBirthRequestorComponent } from './cert-birth/cert-birth-requestor/cert-birth-requestor.component';
import { CertBirthRegistrantComponent } from './cert-birth/cert-birth-registrant/cert-birth-registrant.component';
import { CertBirthDocumentsComponent } from './cert-birth/cert-birth-documents/cert-birth-documents.component';
import { CertBirthReviewComponent } from './cert-birth/cert-birth-review/cert-birth-review.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';

const routes: Routes = [
  { path: 'checkout', component: CheckoutComponent },
  { path: 'cert-birth-review', component: CertBirthReviewComponent },
  { path: 'cert-birth-documents', component: CertBirthDocumentsComponent },
  { path: 'cert-birth-registrant', component: CertBirthRegistrantComponent },
  { path: 'cert-birth-requestor', component: CertBirthRequestorComponent },
  { path: 'cert-birth-terms', component: CertBirthTermsComponent },
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