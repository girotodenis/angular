import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ConfigAppService {

  constructor(private eventService: EventService, private router: Router) {
    console.log("eventService",eventService)
    eventService.registraAcao("app_autenticacao", "pos_login", "ConfigAppService", () => {
      this.router.navigate(['/renda-home']);
    })

  }
}
