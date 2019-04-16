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
  nombre: Array <any> ;
  //tipoVariable = null;
  myId = null;
  datos: any;
  Data_Global: any;
  public Data_Total: any;
  AseguradosP: any;
  PersonalP: any;
  ValorVariableP: any;
  ValorVariableR: any;
  public AseguradosR: any;
  public PersonalR: any;
  public TotalAsegurado: any;
  public TotalTitular: any;
  public TotalDerecho: any;
  public ArrayAfiliado: Array <any>;



public tipoVariable = this.activatedRoute.snapshot.paramMap.get('Tipo');
public Nombre_Red = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute, public router: Router, public rest: RestService) { 
    this.getDataPeru();
    //this.getDataTotal();

  }

  ngOnInit() {

    //this.Nombre_Red = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.Nombre_Red);
    //this.tipoVariable = this.activatedRoute.snapshot.paramMap.get('Tipo');
    console.log(this.tipoVariable);
    this.getDataTotal(this.Nombre_Red);
    
   /*  if (this.tipoVariable === 'Afiliados') {
      this.nombre = [{Titulo: 'Titulares',
                      Valor: 185},
                    { Titulo: 'Derechohabientes',
                      Valor: 200},
                    {Titulo:'Total',
                      Valor: 500}];
    } else if (this.tipoVariable === 'TipoSeguro') {
      this.nombre =[{Titulo: 'Regulares',
                    Valor: 185},
                    { Titulo: 'Agrarios',
                   Valor: 200},
                   {Titulo:'Potestativo',
                   Valor: 500},
                    {Titulo: 'Otros',
                    Valor : 560}];
      
      
      ['Regulares', 'Agrarios', 'Potestativo', 'Otros'];
    } */
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

    if (nombre === 'Sabogal') {
      this.AseguradosR = [this.Data_Global[27].totalAsegurados];
      this.PersonalR = [this.Data_Global[27].totalPersonal];
    } else if (nombre  === 'Rebagliati') {
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


  getDataTotal(nombre: any) {
   
    this.rest.getDataTotal()
    .then(data2 => {
      this.Data_Total = data2;
if (this.tipoVariable === 'Afiliados') {


      if (nombre === 'Amazonas') {
        this.TotalAsegurado = [this.Data_Total[0].totalAsegurado];
        this.TotalTitular = [this.Data_Total[0].totalTitular];
        this.TotalDerecho = [this.Data_Total[0].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];

      } else if (nombre === 'Ancash') {
        this.TotalAsegurado = [this.Data_Total[1].totalAsegurado];
        this.TotalTitular = [this.Data_Total[1].totalTitular];
        this.TotalDerecho = [this.Data_Total[1].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Apurímac') {
        this.TotalAsegurado = [this.Data_Total[2].totalAsegurado];
        this.TotalTitular = [this.Data_Total[2].totalTitular];
        this.TotalDerecho = [this.Data_Total[2].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Arequipa') {
        this.TotalAsegurado = [this.Data_Total[3].totalAsegurado];
        this.TotalTitular = [this.Data_Total[3].totalTitular];
        this.TotalDerecho = [this.Data_Total[3].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Ayacucho') {
        this.TotalAsegurado = [this.Data_Total[4].totalAsegurado];
        this.TotalTitular = [this.Data_Total[4].totalTitular];
        this.TotalDerecho = [this.Data_Total[4].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Cajamarca') {
        this.TotalAsegurado = [this.Data_Total[5].totalAsegurado];
        this.TotalTitular = [this.Data_Total[5].totalTitular];
        this.TotalDerecho = [this.Data_Total[5].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Huancavelica') {
        this.TotalAsegurado = [this.Data_Total[6].totalAsegurado];
        this.TotalTitular = [this.Data_Total[6].totalTitular];
        this.TotalDerecho = [this.Data_Total[6].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Cusco') {
        this.TotalAsegurado = [this.Data_Total[7].totalAsegurado];
        this.TotalTitular = [this.Data_Total[7].totalTitular];
        this.TotalDerecho = [this.Data_Total[7].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Huánuco') {
        this.TotalAsegurado = [this.Data_Total[8].totalAsegurado];
        this.TotalTitular = [this.Data_Total[8].totalTitular];
        this.TotalDerecho = [this.Data_Total[8].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Ica') {
        this.TotalAsegurado = [this.Data_Total[9].totalAsegurado];
        this.TotalTitular = [this.Data_Total[9].totalTitular];
        this.TotalDerecho = [this.Data_Total[9].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Junín') {
        this.TotalAsegurado = [this.Data_Total[10].totalAsegurado];
        this.TotalTitular = [this.Data_Total[10].totalTitular];
        this.TotalDerecho = [this.Data_Total[10].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'La Libertad') {
        this.TotalAsegurado = [this.Data_Total[11].totalAsegurado];
        this.TotalTitular = [this.Data_Total[11].totalTitular];
        this.TotalDerecho = [this.Data_Total[11].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Lambayeque') {
        this.TotalAsegurado = [this.Data_Total[12].totalAsegurado];
        this.TotalTitular = [this.Data_Total[12].totalTitular];
        this.TotalDerecho = [this.Data_Total[12].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Loreto') {
        this.TotalAsegurado = [this.Data_Total[13].totalAsegurado];
        this.TotalTitular = [this.Data_Total[13].totalTitular];
        this.TotalDerecho = [this.Data_Total[13].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Madre de Dios') {
        this.TotalAsegurado = [this.Data_Total[14].totalAsegurado];
        this.TotalTitular = [this.Data_Total[14].totalTitular];
        this.TotalDerecho = [this.Data_Total[14].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Moquegua') {
        this.TotalAsegurado = [this.Data_Total[15].totalAsegurado];
        this.TotalTitular = [this.Data_Total[15].totalTitular];
        this.TotalDerecho = [this.Data_Total[15].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Pasco') {
        this.TotalAsegurado = [this.Data_Total[16].totalAsegurado];
        this.TotalTitular = [this.Data_Total[16].totalTitular];
        this.TotalDerecho = [this.Data_Total[16].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Piura') {
        this.TotalAsegurado = [this.Data_Total[17].totalAsegurado];
        this.TotalTitular = [this.Data_Total[17].totalTitular];
        this.TotalDerecho = [this.Data_Total[17].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Puno') {
        this.TotalAsegurado = [this.Data_Total[18].totalAsegurado];
        this.TotalTitular = [this.Data_Total[18].totalTitular];
        this.TotalDerecho = [this.Data_Total[18].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Tacna') {
        this.TotalAsegurado = [this.Data_Total[19].totalAsegurado];
        this.TotalTitular = [this.Data_Total[19].totalTitular];
        this.TotalDerecho = [this.Data_Total[19].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Tumbes') {
        this.TotalAsegurado = [this.Data_Total[20].totalAsegurado];
        this.TotalTitular = [this.Data_Total[20].totalTitular];
        this.TotalDerecho = [this.Data_Total[20].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Ucayali') {
        this.TotalAsegurado = [this.Data_Total[21].totalAsegurado];
        this.TotalTitular = [this.Data_Total[21].totalTitular];
        this.TotalDerecho = [this.Data_Total[21].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Juliaca') {
        this.TotalAsegurado = [this.Data_Total[22].totalAsegurado];
        this.TotalTitular = [this.Data_Total[22].totalTitular];
        this.TotalDerecho = [this.Data_Total[22].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Rebagliati') {
        this.TotalAsegurado = [this.Data_Total[23].totalAsegurado];
        this.TotalTitular = [this.Data_Total[23].totalTitular];
        this.TotalDerecho = [this.Data_Total[23].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Almenara') {
        this.TotalAsegurado = [this.Data_Total[24].totalAsegurado];
        this.TotalTitular = [this.Data_Total[24].totalTitular];
        this.TotalDerecho = [this.Data_Total[24].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Sabogal') {
        this.TotalAsegurado = [this.Data_Total[25].totalAsegurado];
        this.TotalTitular = [this.Data_Total[25].totalTitular];
        this.TotalDerecho = [this.Data_Total[25].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Moyobamba') {
        this.TotalAsegurado = [this.Data_Total[26].totalAsegurado];
        this.TotalTitular = [this.Data_Total[26].totalTitular];
        this.TotalDerecho = [this.Data_Total[26].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Tarapoto') {
        this.TotalAsegurado = [this.Data_Total[27].totalAsegurado];
        this.TotalTitular = [this.Data_Total[27].totalTitular];
        this.TotalDerecho = [this.Data_Total[27].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      } else if (nombre === 'Huaraz') {
        this.TotalAsegurado = [this.Data_Total[28].totalAsegurado];
        this.TotalTitular = [this.Data_Total[28].totalTitular];
        this.TotalDerecho = [this.Data_Total[28].totalDerHabiente];
        this.ArrayAfiliado = [{Titulo: 'Titulares',
                                Valor: this.TotalTitular},
                              {Titulo: 'Derecho Habiente',
                              Valor: this.TotalDerecho},
                              {Titulo: 'Total Asegurados',
                              Valor: this.TotalAsegurado}];
      }
    } else if (this.tipoVariable === 'TipoSeguro') {
      this.ArrayAfiliado = [{Titulo: 'Regulares',
                    Valor: 185},
                    { Titulo: 'Agrarios',
                   Valor: 200},
                   {Titulo:'Potestativo',
                   Valor: 500},
                    {Titulo: 'Otros',
                    Valor : 560}];


    }

      console.log('Data:'  + this.TotalAsegurado);



  //console.log(this.AseguradosP);
    });
  }

}
