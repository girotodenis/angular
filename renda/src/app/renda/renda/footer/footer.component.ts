import { Component } from '@angular/core';
import { EventService } from '../../../shared/event.service';
import { CustomBaseComponent } from '../../../shared/custom-base-component';

@Component({
  selector: 'renda-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent extends CustomBaseComponent {
  
  value: number = 30;

  override cadastrarEnvento(): void {
    this.addEvento("progress");
  }
  
  override registrarAcao(): void {
    
    this.addAcao("progress", (data)=>this.setValue(data));
  }

  
  setValue(valor:number){
    this.value = valor;
  }

}
