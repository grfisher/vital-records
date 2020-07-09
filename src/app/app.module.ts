import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './shared/components/login/login.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart/shopping-cart.component';

import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { ThankYouComponent } from './checkout/thank-you/thank-you.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { InfoFooterComponent } from './shared/components/info-footer/info-footer';
import { CartComponent } from './checkout/cart/cart.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterNavComponent } from './shared/components/footer-nav/footer-nav.component';

const routes = [
  { path: '', redirectTo: 'shopping-cart', pathMatch: 'full' },
  {
    path: 'forms',
    loadChildren: () => 
      import('./cert-birth/cert-birth.module').then(m => m.CertBirthModule)
    },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: '**', redirectTo: 'forms' }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    CheckoutComponent,
    ThankYouComponent,
    FooterComponent,
    InfoFooterComponent,
    CartComponent,
    FooterNavComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
