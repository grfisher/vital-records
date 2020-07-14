import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CertDeceasedTermsComponent } from './cert-deceased-terms/cert-deceased-terms.component';
import { DeceasedFormPagesComponent } from './deceased-form-pages.component';
import { HttpClientModule } from '@angular/common/http';

const routes = [
  {
    path: '',
    component: DeceasedFormPagesComponent,
    children: [
      { path: '', redirectTo: 'shopping' },
      { path: 'terms', redirectTo: 'terms' },
      {
        path: 'terms',
        component: CertDeceasedTermsComponent
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
        CertDeceasedTermsComponent,
        CertDeceasedTermsComponent
      ],
        providers: [],
})
export class CertDeceasedModule { }
