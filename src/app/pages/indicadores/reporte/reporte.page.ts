import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-reporte',
  templateUrl: './indicadores/reporte.page.html',
  styleUrls: ['./indicadores/reporte.page.scss'],
})
export class ReportePage implements OnInit {
  myId = null;
  nombre = null;
  constructor(private activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('id');

    this.nombre = this.activatedRoute.snapshot.paramMap.get('locs');
    console.log(this.nombre);
    // let id = this.navParams.get('locs');
    // let name = this.navParams.get('name');
    // console.log(id);
    // console.log(name);



  }

  async onClick() {

    return this.router.navigateByUrl('/grafico/' + this.myId);

  }




}
