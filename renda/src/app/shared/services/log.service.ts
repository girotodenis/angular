import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private mensagensSubject = new Subject<string>();
  
  add(mensagem: string): void {
    this.mensagensSubject.next(mensagem);
  }

  obterMensagens(): Subject<string> {
    return this.mensagensSubject;
  }

  limparMensagens(): void {
    this.mensagensSubject.next(''); // Limpar mensagens emitindo uma mensagem vazia
  }
}
