import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RendaModule } from './renda/renda.module';
import { RendaRoutingModule } from './renda/renda-routing.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { ConfigAppService } from './services/config-app.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RendaModule,
    RendaRoutingModule,
    LoginModule,
    LoginRoutingModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    ConfigAppService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}



