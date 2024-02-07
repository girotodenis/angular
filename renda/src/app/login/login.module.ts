import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleComponent } from './google/google.component';
import { TemplateComponent } from './template/template.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GoogleComponent,
    TemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class LoginModule { }
