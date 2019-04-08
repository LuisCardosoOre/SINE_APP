import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { RestService } from 'src/app/rest.service';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  constructor(public router: Router, private actionSheetCtrl: ActionSheetController, public rest: RestService) {

    this.getDataPeru();
    this.getDataRed(this.Nombre_Red);
   }



  Data_Global: any;
  AseguradosP: any;
  PersonalP: any;
  AseguradosR: any;
  PersonalR: any;
  Nombre_Red: string;



  ngOnInit() {
  }

  async onClick(event: any) {

    this.Nombre_Red = event.toElement.id;
    this.getDataRed(this.Nombre_Red);


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
          this.getDataRed(this.Nombre_Red);
        }
      }, {
        text: 'Red Rebagliati',
        icon: 'checkmark-circle',
        cssClass: 'azul',
        handler: () => {
          this.Nombre_Red = 'Rebagliati';
          this.getDataRed(this.Nombre_Red);
        }
      }, {
        text: 'Red Sabogal',
        icon: 'checkmark-circle',
        cssClass: 'azul',
        handler: () => {
          this.Nombre_Red = 'Sabogal';
          this.getDataRed(this.Nombre_Red);
        }
      }]

    });

    await actionSheet.present();

   // this.getDataRed(this.Nombre_Red);
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
          this.getDataRed(this.Nombre_Red);

        }
      }, {
        text: 'Red Huaraz',
        icon: 'checkmark-circle',
        cssClass: 'azul',
        handler: () => {
          this.Nombre_Red = 'Huaraz';
          this.getDataRed(this.Nombre_Red);

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
          this.getDataRed(this.Nombre_Red);
        }
      }, {
        text: 'Red Juliaca',
        icon: 'checkmark-circle',
        cssClass: 'azul',
        handler: () => {
          this.Nombre_Red = 'Juliaca';
          this.getDataRed(this.Nombre_Red);
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
          this.getDataRed(this.Nombre_Red);
        }
      }, {
        text: 'Red Tarapoto',
        icon: 'checkmark-circle',
        cssClass: 'azul',
        handler: () => {
          this.Nombre_Red = 'Tarapoto';
          this.getDataRed(this.Nombre_Red);
        }
      }]
    });
    await actionSheet.present();


  }




  //conexion de data servicio GET

  async getDataPeru() {
    this.rest.getUsers()
    .then(data => {
      this.Data_Global = data;
    //console.log(this.users);

    this.AseguradosP = [this.Data_Global[22].totalAsegurados];
    this.PersonalP = [this.Data_Global[22].totalPersonal];
  //console.log(this.users);
    });

  }

  async getDataRed(nombre: any) {
    this.rest.getUsers()
    .then(data => {
      this.Data_Global = data;
    //console.log(this.users);

    if (nombre === 'Sabogal') {
      this.AseguradosR = [this.Data_Global[27].totalAsegurados];
      this.PersonalR = [this.Data_Global[27].totalPersonal];
    } else if (nombre === 'Rebagliati') {
      this.AseguradosR = [this.Data_Global[26].totalAsegurados];
      this.PersonalR = [this.Data_Global[26].totalPersonal];
    } else if (nombre === 'Amazonas') {
      this.AseguradosR = [this.Data_Global[0].totalAsegurados];
      this.PersonalR = [this.Data_Global[0].totalPersonal];
    } else if (nombre === 'Ancash') {
      this.AseguradosR = [this.Data_Global[1].totalAsegurados];
      this.PersonalR = [this.Data_Global[1].totalPersonal];
    } else if (nombre === 'Apurímac') {
      this.AseguradosR = [this.Data_Global[2].totalAsegurados];
      this.PersonalR = [this.Data_Global[2].totalPersonal];
    } else if (nombre === 'Arequipa') {
      this.AseguradosR = [this.Data_Global[3].totalAsegurados];
      this.PersonalR = [this.Data_Global[3].totalPersonal];
    } else if (nombre === 'Ayacucho') {
      this.AseguradosR = [this.Data_Global[4].totalAsegurados];
      this.PersonalR = [this.Data_Global[4].totalPersonal];
    } else if (nombre === 'Cajamarca') {
      this.AseguradosR = [this.Data_Global[5].totalAsegurados];
      this.PersonalR = [this.Data_Global[5].totalPersonal];
    } else if (nombre === 'Cusco') {
      this.AseguradosR = [this.Data_Global[7].totalAsegurados];
      this.PersonalR = [this.Data_Global[7].totalPersonal];
    } else if (nombre === 'Huancavelica') {
      this.AseguradosR = [this.Data_Global[8].totalAsegurados];
      this.PersonalR = [this.Data_Global[8].totalPersonal];
    } else if (nombre === 'Huánuco') {
      this.AseguradosR = [this.Data_Global[9].totalAsegurados];
      this.PersonalR = [this.Data_Global[9].totalPersonal];
    } else if (nombre === 'Huaraz') {
      this.AseguradosR = [this.Data_Global[10].totalAsegurados];
      this.PersonalR = [this.Data_Global[10].totalPersonal];
    } else if (nombre === 'Ica') {
      this.AseguradosR = [this.Data_Global[11].totalAsegurados];
      this.PersonalR = [this.Data_Global[11].totalPersonal];
    } else if (nombre === 'Juliaca') {
      this.AseguradosR = [this.Data_Global[13].totalAsegurados];
      this.PersonalR = [this.Data_Global[13].totalPersonal];
    } else if (nombre === 'Junin') {
      this.AseguradosR = [this.Data_Global[14].totalAsegurados];
      this.PersonalR = [this.Data_Global[14].totalPersonal];
    } else if (nombre === 'La Libertad') {
      this.AseguradosR = [this.Data_Global[15].totalAsegurados];
      this.PersonalR = [this.Data_Global[15].totalPersonal];
    } else if (nombre === 'Lambayeque') {
      this.AseguradosR = [this.Data_Global[16].totalAsegurados];
      this.PersonalR = [this.Data_Global[16].totalPersonal];
    } else if (nombre === 'Loreto') {
      this.AseguradosR = [this.Data_Global[17].totalAsegurados];
      this.PersonalR = [this.Data_Global[17].totalPersonal];
    } else if (nombre === 'Madre de Dios') {
      this.AseguradosR = [this.Data_Global[18].totalAsegurados];
      this.PersonalR = [this.Data_Global[18].totalPersonal];
    } else if (nombre === 'Moquegua') {
      this.AseguradosR = [this.Data_Global[19].totalAsegurados];
      this.PersonalR = [this.Data_Global[19].totalPersonal];
    } else if (nombre === 'Moyobamba') {
      this.AseguradosR = [this.Data_Global[20].totalAsegurados];
      this.PersonalR = [this.Data_Global[20].totalPersonal];
    } else if (nombre === 'Pasco') {
      this.AseguradosR = [this.Data_Global[21].totalAsegurados];
      this.PersonalR = [this.Data_Global[21].totalPersonal];
    } else if (nombre === 'Piura') {
      this.AseguradosR = [this.Data_Global[23].totalAsegurados];
      this.PersonalR = [this.Data_Global[23].totalPersonal];
    } else if (nombre === 'Puno') {
      this.AseguradosR = [this.Data_Global[24].totalAsegurados];
      this.PersonalR = [this.Data_Global[24].totalPersonal];
    } else if (nombre === 'Almenara') {
      this.AseguradosR = [this.Data_Global[25].totalAsegurados];
      this.PersonalR = [this.Data_Global[25].totalPersonal];
    } else if (nombre === 'Tacna') {
      this.AseguradosR = [this.Data_Global[28].totalAsegurados];
      this.PersonalR = [this.Data_Global[28].totalPersonal];
    } else if (nombre === 'Tarapoto') {
      this.AseguradosR = [this.Data_Global[29].totalAsegurados];
      this.PersonalR = [this.Data_Global[29].totalPersonal];
    } else if (nombre === 'Tumbes') {
      this.AseguradosR = [this.Data_Global[30].totalAsegurados];
      this.PersonalR = [this.Data_Global[30].totalPersonal];
    } else if (nombre === 'Ucayali') {
      this.AseguradosR = [this.Data_Global[31].totalAsegurados];
      this.PersonalR = [this.Data_Global[31].totalPersonal];
    }

    
  //console.log(this.users);
    });

  }

}
