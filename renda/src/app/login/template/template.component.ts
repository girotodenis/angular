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
    this.eventService.cadastro("app_autenticacao", "pos_login");
    this.eventService.cadastro("app_autenticacao", "logout");
  }

  ngOnDestroy(): void {
  }

}
