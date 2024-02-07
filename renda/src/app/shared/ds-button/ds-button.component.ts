import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CustomBaseComponent } from '../custom-base-component';


@Component({
  selector: 'ds-button',
  templateUrl: './ds-button.component.html',
  styleUrl: './ds-button.component.css'
})
export class DsButtonComponent extends CustomBaseComponent{

  @Input() label!: string;
  @Output() onClick = new EventEmitter<void>();


  override cadastrarEnvento(): void {
    
    this.addEvento( "onclick" );
  
  }

  override registrarAcao(): void {
    
    // this.addAcao( "onclick" , (source, self, data)=>{
    //   console.log('RendaButtonComponent clicado ' + data);
    //   this.onClick.emit();
    // });
  }

  handleClick() {
    this.fireAssinc("onclick", this.onClick);
    // this.fire("onclick", 'teste');
  }

}
