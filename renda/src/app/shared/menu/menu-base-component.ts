import { Input, Directive, OnInit, OnDestroy } from '@angular/core';

import { CustomBaseComponent } from '../custom-base-component';

import { MenuItem } from 'primeng/api';

@Directive()
export class MenuBaseComponent extends CustomBaseComponent {

    public items: MenuItem[] = [];


    // Método para adicionar um novo item ao array items
    addItem(label: string | undefined, icon: string | undefined): void {

        if(label){

            let item: MenuItem = {
                label: label,
                icon: icon,
                command: (itemMenu) => this.acao(itemMenu)
            };
    
            this.items.push(item);
    
            this.addEvento(label);
    
            this.items = [...this.items];
    
            console.log("itens menu", this.items)
        }
    }

    addItens(itens: MenuItem[]): void {
        
        if(itens){
            itens.forEach(item=>{
           
                item.command = (itemMenu) => this.acao(itemMenu);
        
                if(item.label){
                    this.addEvento(item.label);
                }
            })
            this.items = [...itens];
        }
    }

    acao(itemMenu: any): void {
        console.log("acao_menu", itemMenu)
        if (itemMenu && itemMenu.item) {
            let item = itemMenu.item;
            if (item && item.label) {
                console.log("acao_menu2", item)
                this.fireAssinc(item.label, item, 0, false)
            }
        }
    }

    limpar(): void {
        this.items = [];
    }









    //   // Método para encontrar um item pelo nome da label e adicionar um novo item a ele
    //   addItemToExistingItem(label: string, newLabel: string, callback?: () => void, nestedItems?: MenuItem[]): void {
    //     const existingItem = this.findItemByLabel(label);

    //     if (existingItem) {
    //       if (!existingItem.items) {
    //         existingItem.items = [];
    //       }

    //       const newItem: MenuItem = { label: newLabel, callback, items: nestedItems };
    //       existingItem.items.push(newItem);
    //     }
    //   }

    //   // Método auxiliar para encontrar um item pelo nome da label
    //   public findItemByLabel(label: string): MenuItem | undefined {
    //     return this.items.find(item => item.label === label);
    //   }


}




