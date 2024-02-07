import { Input, Directive, OnInit, OnDestroy } from '@angular/core';

import { EventService } from './event.service';

@Directive()
export class CustomBaseComponent implements OnInit, OnDestroy {
    
    @Input() rendaId!: string;

    constructor(public eventService: EventService) {
    }

    ngOnDestroy() {
        this.eventService.removerCadastro(this.rendaId);
    }

    ngOnInit() {
        if (!this.rendaId) {
            throw new Error("Attribute rendaId is required");
        }
        this.eventService.ngOnInit();
        this.cadastrarEnvento();
        this.registrarAcao();
    }

    cadastrarEnvento(){};
    registrarAcao(){};

    addEvento(evento: string) {
        this.eventService.cadastro(this.rendaId, evento);
    }

    addAcao(evento: string, callback: ( data: any) => void) {
        this.eventService.registraAcaoPrioritaria(this.rendaId, evento, this.rendaId, callback);
    }

    fire(nomeEvento: string, data: any, allWindow:boolean=false){
        this.eventService.fireEvent(this.rendaId, nomeEvento, data, allWindow);
    }

    fireAssinc(nomeEvento: string, data: any, time:number=0, allWindow:boolean=false){
        this.eventService.fireEventAssinc(this.rendaId, nomeEvento, data,time, allWindow);
    }


}