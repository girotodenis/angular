import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomBaseComponent } from '../../shared/custom-base-component';
import { Router } from '@angular/router';
import { EventService } from '../../shared/event.service';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrl: './google.component.css'
})
export class GoogleComponent implements OnInit, OnDestroy {


  constructor(private eventService: EventService, private router: Router) {
  }


  ngOnInit(): void {

    this.eventService.cadastro("clique_google", "onclick");

    /**
    * ação do botão logar
    */
    this.eventService.registraAcao("clique_google", "onclick", "login-google", (data) => {

      let user: any = {
        nome: "Denis Giroto",
        logado: true
      };

      console.log(" clique_google onclick")

      localStorage['userLogin'] = JSON.stringify(user);

      this.eventService.fireEvent("app_autenticacao", "pos_login", user);
    });


    if (localStorage['userLogin']) {
      let local: string = localStorage['userLogin'];
      if (local && "" !== local) {
        let user: any = JSON.parse(local);
        this.eventService.fireEvent("app_autenticacao", "pos_logar", user);;
      } else {
        this.router.navigate(['/login']);
      }
    }



  }

  ngOnDestroy(): void {
    this.eventService.removerCadastro("clique_google");
  }

}
