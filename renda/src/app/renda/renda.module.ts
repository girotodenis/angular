import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RendaComponent } from './renda/renda.component';
import { SharedModule } from '../shared/shared.module';


import { SplitterModule } from "primeng/splitter";
import { SidebarModule } from 'primeng/sidebar';
import { ScrollPanelModule } from 'primeng/scrollpanel';
//import { FooterModule } from 'primeng/footer';
import {ProgressBarModule} from 'primeng/progressbar'
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {MenubarModule} from 'primeng/menubar';
import { ChipModule } from 'primeng/chip';
import {ButtonModule} from 'primeng/button';

import { ListboxModule } from 'primeng/listbox';
import { FooterComponent } from './renda/footer/footer.component';
import { SidebarComponent } from './renda/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';


@NgModule({
  declarations: [
    HomeComponent,
    RendaComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,

    ButtonModule,
    SplitterModule,SidebarModule,ScrollPanelModule, ProgressBarModule , ChipModule, MenubarModule, BreadcrumbModule, ListboxModule,FormsModule,BadgeModule
  ]
})
export class RendaModule { }
