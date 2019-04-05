import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { text } from '@angular/core/src/render3';
import { format } from 'url';
import { NavParams } from '@ionic/angular';


@Component({
  selector: 'app-lista-indicadores',
  templateUrl: './lista-indicadores.page.html',
  styleUrls: ['./lista-indicadores.page.scss'],
})
export class ListaIndicadoresPage implements OnInit {
  myId = null;
  nombre = null;
  constructor(private activatedRoute: ActivatedRoute, public router: Router, private activeRoute: ActivatedRoute) {
     //this.router.navigate(['/grafico'  , {nombre: this.myId}]);

   }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.params.subscribe(data => {
      this.nombre = data;
      console.log(this.nombre);
    } );


  }

   async onClick() {

    return this.router.navigateByUrl( '/reporte/' + this.myId + '/datos/' + this.myId);

  }



}
