import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './shared/components/login/login.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart/shopping-cart.component';
import { CertBirthTermsComponent } from './cert-birth/cert-birth-terms/cert-birth-terms.component';
import { CertBirthRequestorComponent } from './cert-birth/cert-birth-requestor/cert-birth-requestor.component';
import { CertBirthRegistrantComponent } from './cert-birth/cert-birth-registrant/cert-birth-registrant.component';
import { CertBirthDocumentsComponent } from './cert-birth/cert-birth-documents/cert-birth-documents.component';
import { CertBirthReviewComponent } from './cert-birth/cert-birth-review/cert-birth-review.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { ThankYouComponent } from './checkout/thank-you/thank-you.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { InfoFooterComponent } from './shared/components/info-footer/info-footer.component';
import { CartComponent } from './checkout/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ShoppingCartComponent,
    CertBirthTermsComponent,
    CertBirthRequestorComponent,
    CertBirthRegistrantComponent,
    CertBirthDocumentsComponent,
    CertBirthReviewComponent,
    CheckoutComponent,
    ThankYouComponent,
    FooterComponent,
    InfoFooterComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
