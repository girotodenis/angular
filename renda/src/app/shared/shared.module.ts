import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsButtonComponent } from './ds-button/ds-button.component';

import { BrowserModule } from '@angular/platform-browser';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

import { ButtonModule } from 'primeng/button';
import { DsEditorComponent } from './ds-editor/ds-editor.component';
import { DsAgendadorComponent } from './ds-agendador/ds-agendador.component';

import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DsLogComponent } from './ds-log/ds-log.component';


import { ScrollPanelModule } from 'primeng/scrollpanel';




@NgModule({
  providers:[
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
  declarations: [
    DsButtonComponent,
    DsEditorComponent,
    DsAgendadorComponent,
    DsLogComponent
  ],
  imports: [
    CommonModule,
    CalendarModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    BrowserModule,
    ScrollPanelModule,
    EditorModule
  ],
  exports: [
    DsButtonComponent,
    DsEditorComponent,
    DsAgendadorComponent,
    DsLogComponent
  ]
})
export class SharedModule { }
