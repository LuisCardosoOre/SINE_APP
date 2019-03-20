import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {


  Nombre_Red: string;


  constructor() { }

  ngOnInit() {
  }



  async onClick(event: any) {

    this.Nombre_Red = event.toElement.id;


  }

}
