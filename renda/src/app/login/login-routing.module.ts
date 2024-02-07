import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateComponent } from './template/template.component';
import { GoogleComponent } from './google/google.component';



export const LoginRoutes: Routes = [
  {
      path: 'login', 
      component: TemplateComponent, 
      children: [{path: '', component: GoogleComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(LoginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
