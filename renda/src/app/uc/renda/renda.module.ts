import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { ComponentsModule } from '../../components/components.module'

import { HomeComponent } from './views/home/home.component';
import { RendaComponent } from './components/renda/renda.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  declarations: [
    HomeComponent, 
    RendaComponent
  ]
})
export class RendaModule { }
