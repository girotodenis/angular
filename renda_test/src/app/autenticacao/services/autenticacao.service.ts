import { UsuarioData } from '../models/usuario-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private _usuarioData = new BehaviorSubject<UsuarioData>({
    nome: '',
    photoUrl: '',
    idTokem: '',
    email: '',
    logado: false
  })

  constructor() { }

  get usuarioData(): UsuarioData {
    return this._usuarioData.value;
  }

  set usuarioData(usuarioData: UsuarioData){
    this._usuarioData.next(usuarioData);
  }

}
