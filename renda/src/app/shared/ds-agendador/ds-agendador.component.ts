import { Component , Input , Output , EventEmitter } from '@angular/core';
import { CustomBaseComponent } from '../custom-base-component';

@Component({
  selector: 'ds-agendador',
  templateUrl: './ds-agendador.component.html',
  styleUrl: './ds-agendador.component.css'
})
export class DsAgendadorComponent extends CustomBaseComponent{

  ano: Date = new Date();
  data: Date = new Date();
  @Input() minDate: Date = new Date() ;
  @Input() maxDate: Date = new Date();
  @Input() disabledDates: Date[] = [];


  @Input() colunas: number = 5;
  @Input() listaDeStrings: string[] = ['07:00', '07:30' , '08:00', '08:30' , '09:00', '09:30' , '10:00', '10:30' , '11:00', '11:30' , '12:00', '12:30' , 
                             '13:00', '13:30' , '14:00', '14:30' ,'15:00', '15:30' ,'16:00', '16:30' ,'17:00', '17:30' ,'18:00', '18:30' ,
                             '19:00', '19:30' ,'20:00', '20:30' ,'21:00', '21:30' ];

  @Output() checkboxSelecionados = new EventEmitter<string[]>();
  selectedDates: string[] = [];

  matrizDeStrings: string[][] = [];

  override ngOnInit(): void {
    super.ngOnInit();
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month -1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(0);
    this.minDate.setFullYear(1900);
    this.maxDate = new Date();
    this.maxDate.setMonth(12);
    this.maxDate.setFullYear(2500);
    this.disabledDates.push(new Date(2024, 0, 28),new Date(2024, 0, 23));

    this.montarMatriz();
  }

  onSelecionaAno(event: any): void {
    let year = this.ano.getFullYear();
    console.log('ano selecionada:', year);
    let month = this.data.getMonth();
    let day = this.data.getDay();
    this.data = new Date();
    this.data.setFullYear(year);
    this.data.setMonth(month);
    this.data.setDate(day);
    console.log('Nova data selecionada:', this.data);
  }

  onSelecionaData(event: any): void {
    console.log('Nova data selecionada:', this.data);
    let year = this.data.getFullYear();
    this.ano.setFullYear(year);
  }

  onCheckboxChange(valor: string): void {
    const index = this.selectedDates.indexOf(valor);

    if (index === -1) {
      this.selectedDates.push(valor);
    } else {
      this.selectedDates.splice(index, 1);
    }

    this.checkboxSelecionados.emit(this.selectedDates);
  }

  private montarMatriz(): void {

 
    if (this.listaDeStrings && this.listaDeStrings.length > 0 && this.colunas > 0) {
      const totalLinhas = Math.ceil(this.listaDeStrings.length / this.colunas);

      for (let i = 0; i < totalLinhas; i++) {
        const linha = this.listaDeStrings.slice(i * this.colunas, (i + 1) * this.colunas);
        this.matrizDeStrings.push(linha);
      }
    }
    console.log(this.matrizDeStrings)
  }

}
