import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  constructor(public router: Router, private actionSheetCtrl: ActionSheetController) { }




  Nombre_Red: string;


  ngOnInit() {
  }

  async onClick(event: any) {

    this.Nombre_Red = event.toElement.id;


  }

  async CambioPagina() {

    return this.router.navigateByUrl('/lista-indicadores/' + this.Nombre_Red);

  }

  async ListaRedesLima(event: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Redes de Lima',
      buttons: [{
        text: 'Red Almenara',
        icon: 'checkmark-circle',
        cssClass: 'azul',
        handler: () => {
          this.Nombre_Red = 'Almenara';

        }
      }, {
        text: 'Red Rebagliati',
        icon: 'checkmark-circle',
        cssClass: 'azul',
        handler: () => {
          this.Nombre_Red = 'Rebagliati';

        }
      }, {
        text: 'Red Sabogal',
        icon: 'checkmark-circle',
        cssClass: 'azul',
        handler: () => {
          this.Nombre_Red = 'Sabogal';

        }
      }]
    });
    await actionSheet.present();
  }

  async ListaRedesAncash(event: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Redes',
      buttons: [{
        text: 'Red Ancash',
        icon: 'checkmark-circle',
        cssClass: 'azul',
        handler: () => {
          this.Nombre_Red = 'Ancash';

        }
      }, {
        text: 'Red Huaraz',
        icon: 'checkmark-circle',
        cssClass: 'azul',
        handler: () => {
          this.Nombre_Red = 'Huaraz';

        }
      }]
    });
    await actionSheet.present();
  }


  async ListaRedesPuno(event: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Redes',
      buttons: [{
        text: 'Red Puno',
        icon: 'checkmark-circle',
        cssClass: 'azul',
        handler: () => {
          this.Nombre_Red = 'Puno';

        }
      }, {
        text: 'Red Juliaca',
        icon: 'checkmark-circle',
        cssClass: 'azul',
        handler: () => {
          this.Nombre_Red = 'Juliaca';

        }
      }]
    });
    await actionSheet.present();
  }



  async ListaRedesSanMartin(event: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Redes',
      buttons: [{
        text: 'Red Moyobamba',
        icon: 'checkmark-circle',
        cssClass: 'azul',
        handler: () => {
          this.Nombre_Red = 'Moyobamba';

        }
      }, {
        text: 'Red Tarapoto',
        icon: 'checkmark-circle',
        cssClass: 'azul',
        handler: () => {
          this.Nombre_Red = 'Tarapoto';

        }
      }]
    });
    await actionSheet.present();
  }




}
