import { Component, Input,  OnInit, OnDestroy } from '@angular/core';

import { CustomBaseComponent } from '../custom-base-component';

declare var tinymce: any;

@Component({
  selector: 'ds-editor',
  templateUrl: './ds-editor.component.html',
  styleUrl: './ds-editor.component.css'
})
export class DsEditorComponent extends CustomBaseComponent{
  
  content: string = '';

  config = {
    base_url: '/tinymce', // Root for resources
    selector:'#rendaId',
    skin: 'tinymce-5',
    language: 'pt_BR',
    suffix: '.min'  ,
    min_height: 500,
    menubar: true,
    //  toc lineheight print hr paste textcolor colorpicker textpattern imagetools
    plugins: 'variaveisMesclagem fullscreen codesample insertdatetime advlist media lists autoresize save searchreplace nonbreaking link image charmap preview anchor pagebreak visualblocks visualchars code table directionality help',
    external_plugins: {
      variaveisMesclagem: 'plugins/variaveisMesclagem/plugin.js'
    },
    toolbar: `showVariable | undo redo | fontselect | fontsizeselect | styleselect | bold italic underline forecolor backcolor` +
    ` | link image | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent` +
    ` | removeformat | lineheightselect`,
    contextmenu: 'bold italic underline',
  //   style_formats: [{
  //       title: 'Texto justificado com recuo',
  //       block: 'p',
  //       styles: {
  //           'textIndent': '45px',
  //           'text-align': 'justify'
  //       }
  //   },
  //   {
  //       title: 'Citação',
  //       block: 'blockquote',
  //       styles: {
  //           'margin-left': '345px',
  //           'margin-right': '0px'
  //       }
  //   },
  //   {
  //       title: 'Paragraph',
  //       block: 'p',
  //       styles: {
  //           'textIndent': '0',
  //           'margin': '0',
  //           'text-align': 'left'
  //       }
  //   },
  //   {
  //       title: 'Header 1',
  //       block: 'p',
  //       styles: {
  //           'fontSize': '34px'
  //       }
  //   },
  //   {
  //       title: 'Header 2',
  //       block: 'p',
  //       styles: {
  //           'fontSize': '30px'
  //       }
  //   },
  //   {
  //       title: 'Header 3',
  //       block: 'p',
  //       styles: {
  //           'fontSize': '26px'
  //       }
  //   },
  //   {
  //       title: 'Header 4',
  //       block: 'p',
  //       styles: {
  //           'fontSize': '22px'
  //       }
  //   },
  //   {
  //       title: 'Header 5',
  //       block: 'p',
  //       styles: {
  //           'fontSize': '18px'
  //       }
  //   },
  //   {
  //       title: 'Header 6',
  //       block: 'p',
  //       styles: {
  //           'fontSize': '14px'
  //       }
  //   },
  //   {
  //       title: 'Pré-formatado',
  //       block: 'pre',
  //       styles: {
  //           'white-space': 'normal',
  //           'margin': '0',
  //           'font-family': 'Times New Roman',
  //           'font-size': '16px',
  //           'textIndent': '0',
  //           'text-align': 'left'
  //       }
  //   },
  // ],
  // valid_children: "+p[p],+p[blockquote],+p[pre],-blockquote[blockquote],+div[span | div]",
  // image_advtab: false,
  // image_description: false,
  // automatic_uploads: true,
  // file_picker_types: 'image',
  // forced_root_block: 'p', // http://archive.tinymce.com/wiki.php/Configuration:forced_root_block
  // fontsize_formats: [8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96].map(formato => `${formato}pt`).join(' '),
  // lineheight_formats: "1=normal 1.5=26px 2=39px",
  // statusbar: false,
  // branding: false,
  // browser_spellcheck: true,
  // paste_data_images: true,
  // paste_enable_default_filters: false,
  // paste_filter_drop: false,
  autoresize_min_height: 650,
  // //content_css: ['server/css/google-fonts.css', 'server/css/editorPeca.css', 'server/css/peca.css'],
  // //editor_css: 'resources/css/editorPeca.css',
  // body_class: 'nw-editor spacement editor-pagina',
  // pagebreak_separator: "<br><p style=\"page-break-after:always;\"></p>",
   pagebreak_split_block: true
  };

  override cadastrarEnvento(): void {
    
    this.addEvento( "loadLista" );
    this.addEvento( "loadText" );
  }

  override registrarAcao(): void {
    
    
    this.addAcao( "loadLista" , ( data )=>{
      try {
        let editor = tinymce.get(this.rendaId);
        editor.fire("loadVariables",{'variablesEvent': data} );
      } catch (error) {
        console.error('loadLista',error)
      }
    });
    
    this.addAcao( "loadText" , ( data )=>{
      try {
        let editor = tinymce.get(this.rendaId);
        editor.setContent( data )
        editor.fire("loadContent" );
      } catch (error) {
        console.error('loadText',error)
      }
    });
  }

}
