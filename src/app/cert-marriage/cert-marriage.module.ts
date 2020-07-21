import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CertMarriageTermsComponent } from './cert-marriage-terms/cert-marriage-terms.component';
import { MarriageFormPagesComponent } from './marriage-form-pages.component';
import { HttpClientModule } from '@angular/common/http';

const routes = [
  {
    path: '',
    component: CertMarriageTermsComponent,
    children: [
      { path: '', redirectTo: 'shopping' },
      { path: 'terms', redirectTo: 'terms' },
      {
        path: 'terms',
        component: CertMarriageTermsComponent
      },
      { path: '**', redirectTo: 'shopping' }
    ]
  }
];

@NgModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild(routes)
      ],
      declarations: [
        CertMarriageTermsComponent
      ],
        providers: [],
})
export class CertMarriageModule { }
