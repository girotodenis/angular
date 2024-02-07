import { LogService } from './../services/log.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ds-log',
  templateUrl: './ds-log.component.html',
  styleUrl: './ds-log.component.css'
})
export class DsLogComponent {

  mensagens: string = '';
  private subscription: Subscription;

  constructor(private logService: LogService) {
    this.subscription = logService.obterMensagens().subscribe(mensagem => {
      this.mensagens += '<div>'+mensagem +'<\div>';
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  limparLog(): void {
    this.logService.limparMensagens();
    this.mensagens = '';
  }

}
