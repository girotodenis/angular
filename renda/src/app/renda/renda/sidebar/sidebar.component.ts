import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../shared/event.service';
import { CustomBaseComponent } from '../../../shared/custom-base-component';

interface Menu {
  name: string,
  ico: string,
  valor: number
}

@Component({
  selector: 'renda-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent extends CustomBaseComponent {
  
  ocultar:boolean = false;

  itens!: Menu[];

  selected!: Menu;

  override cadastrarEnvento(): void {

    this.addEvento("onclick")
    
    this.itens = [
      { name: 'Home', ico: 'pi pi-fw pi-home', valor:0 },
      { name: 'Editor Texto', ico: 'pi pi-fw pi-file-word' ,valor:12 },
      { name: 'Sair', ico: 'pi pi-fw pi-power-off', valor:0  }
    ];
  }

  override registrarAcao(): void {
    this.addAcao("onclick", (data)=> this.ocultar= !this.ocultar)
  }

  onItemSelect(event:any):void{
    
  }
  
}
