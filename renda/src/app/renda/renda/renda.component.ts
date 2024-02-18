import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/event.service';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'app-renda',
  templateUrl: './renda.component.html',
  styleUrl: './renda.component.css'
})
export class RendaComponent implements OnInit {

  value: number = 30;
  nome: string = "Denis Giroto";

  breadcrumbItems!: MenuItem[];
  items!: MenuItem[];

  



  constructor(private eventService: EventService) {


  }
  ngOnInit(): void {

    
    
    console.log("template remda")
    
    this.breadcrumbItems = [
      { label: 'Categories' },
      { label: 'Sports' },
      { label: 'Football' },
      { label: 'Countries' },
      { label: 'Spain' },
      { label: 'F.C. Barcelona' },
      { label: 'Squad' },
      { label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' }
    ];

  }

  

}
