import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventService } from '../../shared/event.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent implements OnInit, OnDestroy {

  constructor(private eventService: EventService) {

  }

  ngOnInit(): void {
    console.log("template login")

    this.eventService.cadastro("app_autenticacao", "pos_login");
    this.eventService.cadastro("app_autenticacao", "logout");

    console.log("local 1", localStorage['userLogin'])
    if (localStorage['userLogin']) {
      let local: string = localStorage['userLogin'];
      console.log("local 2", local)
      if (local !== null && "" !== local) {
        console.log("local 3", local)
        let user: any = JSON.parse(local);
        this.eventService.fireEvent("app_autenticacao", "pos_login", user);;
      }
      console.log("local 4", local)
    }
  }

  ngOnDestroy(): void {
  }

}
