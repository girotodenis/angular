import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginModule } from '../autenticacao/login/login.module'

/**template*/
import { HeaderComponent } from './template/header/header.component'
import { FooterComponent } from './template/footer/footer.component';
import { MenuComponent } from './template/menu/menu.component';
import { ContentComponent } from './template/content/content.component';
import { SettingComponent } from './template/setting/setting.component';
/**template*/

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LoginModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ContentComponent,
    SettingComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ContentComponent,
    SettingComponent
  ]
})
export class ComponentsModule { }
