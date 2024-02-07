import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'; 
import { RendaComponent } from './renda/renda.component';

export const RendaRoutes: Routes = [
  {
      path: 'renda-home', 
      component: RendaComponent, 
      children: [{path: '', component: HomeComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(RendaRoutes)],
  exports: [RouterModule]
})
export class RendaRoutingModule {
}
