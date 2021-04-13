import { AutenticacaoService } from '../../../autenticacao/services/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  constructor(private autenticacaoService: AutenticacaoService) { 
  }

  ngOnInit(): void {
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
