import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.page.html',
  styleUrls: ['./reporte.page.scss'],
})
export class ReportePage implements OnInit {
  myId = null;
  grafico = null;
  datos = null;
  constructor(private activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('id');
    this.grafico = 'grafico/' + this.myId;
    this.datos = 'datos/' + this.myId;
    //this.nombre = this.activatedRoute.snapshot.paramMap.get('locs');
    // let id = this.navParams.get('locs');
    // let name = this.navParams.get('name');
    // console.log(id);
    // console.log(name);



  }

 




}
