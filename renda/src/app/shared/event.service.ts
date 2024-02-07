import { Injectable , OnInit} from '@angular/core';
import { LogService } from './services/log.service';

@Injectable({
  providedIn: 'root'
})
export class EventService implements OnInit {

  private events: any = {};
  
  private channel: BroadcastChannel;

  constructor(private logService:LogService){
    this.channel = new BroadcastChannel("eventos_entre_janelas");
  }

  ngOnInit(): void {

      this.channel.onmessage = (event) => {
        //console.warn("event",event);
        let data = event.data;
        var chave  = data.id;
        let words = chave.split("@");
        if(chave.includes("fireEventAssinc")){
          
          this.exeFireAssinc(words[1],words[2], data.data);

        }else if(chave.includes("fireEvent")){

          this.exeFire(words[1],words[2],data.data);

        }else{
          console.warn("atencao")
        }
      };
      
    
  }
  
  cadastro(rendaId: string, nomeEvento: string) {

    this.logService.add(`add: ${rendaId} evento: ${nomeEvento}`);
    //console.warn(`add: ${rendaId} evento: ${nomeEvento}`);
    if (!this.events[rendaId]) {
      this.events[rendaId] = {};
    }
    
    if (!this.events[rendaId][nomeEvento]) {
      this.events[rendaId][nomeEvento] = [];
    }

  }

  removerCadastro(rendaId: string) {
    this.logService.add(`remover eventos de: ${rendaId}`);
    //console.warn(`remover eventos de: ${rendaId}`);
    if (this.events[rendaId]) {
      delete this.events[rendaId];
    }
  }

  registraAcao(rendaId: string, nomeEvento: string, self: string, callback: ( data: any) => void) {
    this.logService.add(`${self} add acao -> ${rendaId} evento: ${nomeEvento}`);
    console.warn(`${self} add acao -> ${rendaId} evento: ${nomeEvento}`);
    if (!this.events[rendaId]) {
      this.events[rendaId] = {};
    }

    if (!this.events[rendaId][nomeEvento]) {
      this.events[rendaId][nomeEvento] = [];
    }

    if (this.events[rendaId] && this.events[rendaId][nomeEvento]) {
      this.events[rendaId][nomeEvento].push({ self, callback });
    }
  }

  registraAcaoPrioritaria(rendaId: string, nomeEvento: string, self: string, callback: ( data: any) => void) {
    this.logService.add(`${self} add acao -> ${rendaId} evento: ${nomeEvento} `);
    //console.warn(`${self} add acao -> ${rendaId} evento: ${nomeEvento} `);
    if (!this.events[rendaId]) {
      this.events[rendaId] = {};
    }

    if (!this.events[rendaId][nomeEvento]) {
      this.events[rendaId][nomeEvento] = [];
    }

    if (this.events[rendaId] && this.events[rendaId][nomeEvento]) {
      this.events[rendaId][nomeEvento].splice(0, 0, { self, callback });;
    }
  }

  removerAcao(rendaId: string, nomeEvento: string, self: string) {
    this.logService.add(`remover acoes de: ${rendaId} evento: ${nomeEvento}, self: ${self}`);
    if (this.events[rendaId] && this.events[rendaId][nomeEvento]) {
      this.events[rendaId][nomeEvento] = this.events[rendaId][nomeEvento].filter((action: any) => action.self !== self);
    }
  }

  fireEvent(rendaId: string, nomeEvento: string, data: any, allWindow:boolean=false) {
    this.logService.add(`fire -> `);
    this.send("fireEvent@"+rendaId+"@"+nomeEvento, data, allWindow);
    //console.warn(`fire -> `);
    this.exeFire(rendaId,nomeEvento,data);
  }

  exeFire(rendaId: string, nomeEvento: string, data: any){
    console.warn(`exe Fire -> `,rendaId, nomeEvento, data,this.events);
    if (this.events[rendaId] && this.events[rendaId][nomeEvento]) {
      this.events[rendaId][nomeEvento].forEach((action: any) => {
        this.logService.add(` ->  ->  -> ${action.self.constructor.name}  -> ${rendaId} evento: ${nomeEvento}`);
        console.warn(` ->  ->  -> ${action.self.constructor.name}  -> ${rendaId} evento: ${nomeEvento}`);
        action.callback( data);
      });
    }
  }
  
  fireEventAssinc(rendaId: string, nomeEvento: string, data: any, time:number=0, allWindow:boolean=false) {
    
    this.logService.add(`fire Assinc -> `+time);
    this.send("fireEventAssinc@"+rendaId+"@"+nomeEvento, data, allWindow);
    console.warn(`fire Assinc -> ` + this.events);
    this.exeFireAssinc(rendaId,nomeEvento,data,time);
  }
  
  exeFireAssinc(rendaId: string, nomeEvento: string, data: any, time:number=0) {
    console.warn(`exe FireAssinc -> `,rendaId, nomeEvento, data);
    setTimeout(() =>{
      this.logService.add(`fire Assinc -> `);
      if (this.events[rendaId] && this.events[rendaId][nomeEvento]) {
        this.events[rendaId][nomeEvento].forEach((action: any) => {
          this.logService.add(` ->  ->  -> ${action.self.constructor.name} -> ${rendaId} evento: ${nomeEvento}`);
          console.warn(` ->  ->  -> ${action.self.constructor.name} -> ${rendaId} evento: ${nomeEvento}`, data);
          setTimeout(() => action.callback( data ), 0);
        });
      }
    },time);
  }

  send(key: string, data: any, allWindow:boolean=false): void {
    
    //console.warn("setItem key",key, data)
    if(allWindow){
      this.channel.postMessage({
        "id":key,
        "data":data
      });
    }
    
  }

}
