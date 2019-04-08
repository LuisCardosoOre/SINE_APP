import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { text } from '@angular/core/src/render3';
import { format } from 'url';
import { NavParams, NavController } from '@ionic/angular';


@Component({
  selector: 'app-lista-indicadores',
  templateUrl: './lista-indicadores.page.html',
  styleUrls: ['./lista-indicadores.page.scss'],
})
export class ListaIndicadoresPage implements OnInit {
  myId = null;
  nombre = null;
  constructor(private activatedRoute: ActivatedRoute, public router: Router, private activeRoute: ActivatedRoute, 
    public navCtrl: NavController) {
     //this.router.navigate(['/grafico'  , {nombre: this.myId}]);

   }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.params.subscribe(data => {
      this.nombre = data;
      console.log(this.nombre);
    } );


  }

   async onClickAfiliados() {
    let Tipo = 'Afiliados';
   //return this.router.navigateByUrl( '/reporte/' + this.myId + '/datos/' + this.myId);
  this.router.navigate(['/reporte/' + this.myId + '/datos/' + this.myId, { Tipo }]);
  }

  async onClickTipoSeguro() {
    let Tipo = 'TipoSeguro';
   //return this.router.navigateByUrl( '/reporte/' + this.myId + '/datos/' + this.myId);
  this.router.navigate(['/reporte/' + this.myId + '/datos/' + this.myId, { Tipo }]);
  }

}
