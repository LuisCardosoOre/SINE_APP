import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaIndicadoresPageModule } from '../lista-indicadores/lista-indicadores.module';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.page.html',
  styleUrls: ['./grafico.page.scss'],
})
export class GraficoPage implements OnInit {

  Nombre_Red: string ;
  nombre: any;
  link = null;
  myId = null;

event: any;

  constructor(private activatedRoute: ActivatedRoute, private activeRoute: ActivatedRoute, private sanitizer: DomSanitizer) {


   }


  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('id');

}


links() {
  if (this.myId = 'Sabogal') {
    // tslint:disable-next-line: max-line-length
          //this.link = 'https://app.powerbi.com/view?r=eyJrIjoiMmU4NjQyN2EtZmE3YS00ZmI5LWE4MmUtZjEyYmRiOGMxNWNmIiwidCI6IjM0ZjMyNDE5LTFjMDUtNDc1Ni04OTZlLTQ1ZDYzMzcyNjU5YiIsImMiOjR9';
// tslint:disable-next-line: max-line-length
     return  this.sanitizer.bypassSecurityTrustResourceUrl('https://app.powerbi.com/view?r=eyJrIjoiMmU4NjQyN2EtZmE3YS00ZmI5LWE4MmUtZjEyYmRiOGMxNWNmIiwidCI6IjM0ZjMyNDE5LTFjMDUtNDc1Ni04OTZlLTQ1ZDYzMzcyNjU5YiIsImMiOjR9');
         // return this.link = 'http://10.0.0.117:8081/Estadistica/';

        }
}




  }










