import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';


@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {


  //Nombre_Red: string ;
  nombre: any[] ;
  //tipoVariable = null;
  myId = null;
  datos: any;
  Data_Global: any;
  AseguradosP: any;
  PersonalP: any;
  ValorVariableP: any;
  ValorVariableR: any;
  public AseguradosR: any;
  public PersonalR: any;


public tipoVariable = this.activatedRoute.snapshot.paramMap.get('Tipo');
public Nombre_Red = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute, public router: Router,public rest: RestService) { 
    this.getDataPeru();

  }

  ngOnInit() {

    //this.Nombre_Red = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.Nombre_Red);
    //this.tipoVariable = this.activatedRoute.snapshot.paramMap.get('Tipo');
    console.log(this.tipoVariable);

    if (this.tipoVariable === 'Afiliados') {
      this.nombre = ['Titulares', 'Derechohabientes', 'Total'];
    } else if (this.tipoVariable === 'TipoSeguro') {
      this.nombre = ['Regulares', 'Agrarios', 'Potestativo', 'Otros'];
    }
    //let dataCard = [{nombre: 'Titulares'}, {nombre: 'Derechohabientes'}, {nombre: 'Total'} ];

   // dataCard.forEach(element => {
     //this.nombre = [element.nombre];
   // });


  }

  async getDataPeru() {
    this.getDataRed(this.Nombre_Red);
    this.rest.getUsers()
    .then(data => {
      this.Data_Global = data;
    //console.log(this.users);
      if (this.tipoVariable === 'Afiliados' || this.tipoVariable === 'TipoSeguro' ) {
         this.ValorVariableP = [this.Data_Global[22].totalAsegurados];
         this.ValorVariableR = this.AseguradosR;
      }
 
    this.PersonalP = [this.Data_Global[22].totalPersonal];
  //console.log(this.AseguradosP);
    });

  }




  async getDataRed(nombre: any) {
    this.rest.getUsers()
    .then(data => {
      this.Data_Global = data;
    //console.log(this.users);

    if (this.Nombre_Red === 'Sabogal') {
      this.AseguradosR = [this.Data_Global[27].totalAsegurados];
      this.PersonalR = [this.Data_Global[27].totalPersonal];
    } else if (this.Nombre_Red  === 'Rebagliati') {
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
