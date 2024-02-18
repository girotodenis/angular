import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomBaseComponent } from '../../shared/custom-base-component';
import { EventService } from '../../shared/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  testeBoolean:boolean = false;

  constructor(public eventService: EventService) {
  }
  
  ngOnInit(): void {
    this.eventService.cadastro("homeProgrss", "onclick");
    
    this.eventService.registraAcao("homeProgrss", "onclick", "HomeComponent", (data)=>this.testeProgress(data));
    this.eventService.registraAcao("removerProgrss", "onclick", "HomeComponent", (data)=>this.removerProgress(data));
   
    this.addMenuBar();
    
  }
  
  ngOnDestroy(): void {
    
    this.eventService.removerCadastro("homeProgrss");
    this.eventService.removerCadastro("removerProgrss");

    this.eventService.removerAcao("menubarApp", "logout", "HomeComponent")
  }

  addMenuBar(){

    // this.eventService.fireEvent("menubarApp", "add_item", {label: 'novo' , icon: 'pi pi-fw pi-plus'}, false );
    
    // this.eventService.fireEvent("menubarApp", "add_item", {label: 'salvar' , icon: 'pi pi-fw pi-save'}, false );
    
    this.eventService.fireEventAssinc("menubarApp", "add_itens", 
              [
                    { 
                      label: 'novo' , 
                      icon: 'pi pi-fw pi-plus'
                    },
                    {
                      label: 'salvar' , 
                      icon: 'pi pi-fw pi-save'
                    },
                    {
                      label: 'logout' , 
                      icon: 'pi pi-fw pi-power-off'
                    }
              ], 
        300, false );
    
    this.eventService.registraAcao("menubarApp", "novo", "HomeComponent", (menu) => console.log("menu novo",menu) );
    this.eventService.registraAcao("menubarApp", "salvar", "HomeComponent", (menu) => console.log("salvr ",menu) );
    this.eventService.registraAcao("menubarApp", "logout", "HomeComponent", () => this.logout() );

  }

  
  logout(): void{
    this.eventService.fireEvent("app_autenticacao", "logout", null);
  }

  
  removerProgress(data:any): void{
    this.eventService.fireEvent("footerApp", "progress", 0 );
  }

  testeProgress(data:any): void{

    //this.eventService.fireEvent("footerApp", "progress", 10);

    console.log("testeBoolean",this.testeBoolean)
    if(this.testeBoolean= !this.testeBoolean){
     // setTimeout(() => {
       
       //while(this.testeBoolean){
         for (let index = 1; index <= 10; index++) {
           
           console.log("for", index,  this.testeBoolean)
           
                if(this.testeBoolean){
                  console.log("for testeBoolean", this.testeBoolean)
                  this.eventService.fireEvent("footerApp", "progress", index*10 );
                }else{
                  console.log("for break", this.testeBoolean)
                  //break;
                }


          }
          //  }
     //   }, 0);
      }else{
        console.log("fireEventAssinc fim", this.testeBoolean)
        this.eventService.fireEventAssinc("footerApp", "progress", 1, 3);
      }

  }

}
