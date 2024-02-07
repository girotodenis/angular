import { Component, OnInit, OnDestroy } from '@angular/core';

import { EventService } from './shared/event.service';
import { environment } from './environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {

  title : string = 'renda';

  variaveis: any = {
    'xxxxvar1.abc.nome': 'KELLY GIROTO',
    'xxxxvar1.abc.descricao': 'SECRETARIA',
    'xxxxvar2.chivo.delta': 'DELTA',
    'xxxvar3': 'Mais um valor',
    'xxxxxxvar3.sem.valor': 'YYYYYY'
  };

  variaveis2: any = {
    'xxxxvar1.abc.nome': 'DENIS SILVA',
    'xxxxvar1.abc.descricao': 'PROGRAMADOR',
    'xxxxvar2.chivo.delta': 'XPTO',
    'xxxvar3': 'valor',
    'xxxxxxvar3.sem.valor': 'XXXXXXXXX'
  };

  variaveis3: any = {
    'xxxxvar1.abc.nome': 'ANTONIO REIS',
    'xxxxvar1.abc.descricao': 'ESTUDANTE',
    'xxxxvar2.chivo.delta': 'COLEGIO',
    'xxxvar3': 'valor 2',
    'xxxxxxvar3.sem.valor': 'KKKKKK'
  };

  constructor(private eventService: EventService) {
    
  }

  ngOnInit(): void {

    
    
    this.eventService.registraAcao("modelo", "onclick", "meuid", ( data ) => {

      let modelo = `
      <p>
        O fulano
        <span class="variaveisMesclagem" data-var="xxxxvar1.abc.nome">
          <span style="color: navy; font-style: italic;">@xxxxvar1.abc.nome</span>
        </span>&nbsp;
        foi fazer:
      </p>      
      <ol>      
        <li>
          <span class="variaveisMesclagem" data-var="xxxxvar1.abc.descricao">
            <span style="color: navy; font-style: italic;">@xxxxvar1.abc.descricao</span>
          </span>&nbsp;
        </li>      
        <li>
          <span class="variaveisMesclagem" data-var="xxxxvar2.chivo.delta">
            <span style="color: navy; font-style: italic;">@xxxxvar2.chivo.delta</span>
          </span>&nbsp;
        </li>      
        <li>
          <span class="variaveisMesclagem" data-var="xxxxxxvar3.sem.valor">
            <span style="color: navy; font-style: italic;">@xxxxxxvar3.sem.valor</span>
          </span>&nbsp;
        </li>      
      </ol>`;

      this.eventService.fireEvent( "meu_editor_1", "loadText", modelo, true)
    });

    this.eventService.registraAcao("clique_denis", "onclick", "meuid", ( data ) => {
      
      this.eventService.fireEvent("meu_editor_1","loadLista", this.variaveis2 , true)
    });

    this.eventService.registraAcao("clique_kelly", "onclick", "meuid", ( data ) => {

      this.eventService.fireEvent("meu_editor_1","loadLista", this.variaveis)
    });

    this.eventService.fireEventAssinc("meu_editor_1","loadLista", {
      'xxxxvar1.abc.nome': 'xxxxxxxxxxxxxxxx',
      'xxxxvar1.abc.descricao': 'xxxxxxxxxxxxxxxx',
      'xxxxvar2.chivo.delta': 'xxxxxxxxxxxxxxxx',
      'xxxvar3': 'xxxxxxxxxxxxxxxx',
      'xxxxxxvar3.sem.valor': 'xxxxxxxxxxxxxxxx'
    },0, true)

  }

  ngOnDestroy(): void {

    this.eventService.removerAcao("modelo", "onclick", "meuid");
    this.eventService.removerAcao("clique_denis", "onclick", "meuid");
    this.eventService.removerAcao("clique_kelly", "onclick", "meuid");
  }


}
