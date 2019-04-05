import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente [] = [
  {
    icon: 'flag',
    name: 'Mapa',
    redirectTo: '/mapa'

  }

];

  constructor() { }

  ngOnInit() {
  }

}
interface Componente {
  icon: String;
  name: String;
  redirectTo: String; }
