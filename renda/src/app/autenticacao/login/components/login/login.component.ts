import { AutenticacaoService } from '../../../services/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'


import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  socialUser: SocialUser;
  isLoggedin: boolean;  
  
  constructor(
    private autenticacaoService: AutenticacaoService,
    private socialAuthService: SocialAuthService,
    private router: Router
  ) { 

    if(localStorage['userLogin']){
      let user:SocialUser = JSON.parse(localStorage['userLogin']) as SocialUser;
      if(user){
        this.autenticacaoService.usuarioData ={
          nome: user.name,
          photoUrl: user.photoUrl,
          idTokem: user.idToken,
          email: user.email,
          logado: true
        };
      }
    }
  }

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      if(user != null){
        console.log('login',user)
        this.autenticacaoService.usuarioData ={
              nome: user.name,
              photoUrl: user.photoUrl,
              idTokem: user.idToken,
              email: user.email,
              logado: true
            };
        localStorage['userLogin'] = JSON.stringify(user) ;
        this.router.navigate(['/renda-home']);
      }else{
        // let user:SocialUser = JSON.parse(localStorage['userLogin']) as SocialUser;
        console.log('logout')
        localStorage['userLogin'] = null;
        this.autenticacaoService.usuarioData = {
          nome: '',
          photoUrl: '',
          idTokem: '',
          email: '',
          logado: false
        };
        this.router.navigate(['/renda-home']);
      }
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    if(this.logado){
      localStorage['userLogin'] = null;
      this.autenticacaoService.usuarioData = {
        nome: '',
        photoUrl: '',
        idTokem: '',
        email: '',
        logado: false
      };
      this.socialAuthService.signOut();
    }
  }

  get nome(): string{
    return this.autenticacaoService.usuarioData.nome;
  }

  get photoUrl(): string{
    return this.autenticacaoService.usuarioData.photoUrl;
  }

  get idTokem(): string{
    return this.autenticacaoService.usuarioData.idTokem;
  }

  get email(): string{
    return this.autenticacaoService.usuarioData.email;
  }

  get logado(): boolean{
    return this.autenticacaoService.usuarioData.logado;
  }

}
