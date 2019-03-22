import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { text } from '@angular/core/src/render3';
import { format } from 'url';
import { NavParams } from '@ionic/angular';


@Component({
  selector: 'app-lista-indicadores',
  templateUrl: './pages/lista-indicadores.page.html',
  styleUrls: ['./pages/lista-indicadores.page.scss'],
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

    return this.router.navigate(['/reporte/' + this.myId  , {locs: this.myId}]);

  }



}
