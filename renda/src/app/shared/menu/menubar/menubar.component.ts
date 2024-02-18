import { MenuItem } from 'primeng/api';
import { Component, Input } from '@angular/core';
import { MenuBaseComponent } from '../menu-base-component';


@Component({
  selector: 'ds-menubar',
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent extends MenuBaseComponent {



  override cadastrarEnvento(): void {
    console.log("cadastrarEnvento", this.rendaId)
    this.addEvento("add_item")
    this.addEvento("add_itens")
  }
  
  override registrarAcao(): void {
    
    console.log("registrarAcao", this.rendaId)
    
    this.addAcao("add_item", (item) => {
      console.log("add_item", item)
      this.addItem(item.label, item.icon)
    })

    this.addAcao("add_itens", (itens:MenuItem[]) => {
      console.log("add_itens", itens)
      this.addItens(itens);
    })

  }

}
