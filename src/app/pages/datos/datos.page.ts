import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {


  Nombre_Red: string ;
  nombre: any;
  link = null;
  myId = null;


  constructor(private sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.myId);
    this.link = this.activatedRoute.snapshot.paramMap.get('tipo');
    console.log(this.link);

    
  }

 /*  links() {
    if (this.myId = 'Sabogal') {
      // tslint:disable-next-line: max-line-length
            //this.link = 'https://app.powerbi.com/view?r=eyJrIjoiMmU4NjQyN2EtZmE3YS00ZmI5LWE4MmUtZjEyYmRiOGMxNWNmIiwidCI6IjM0ZjMyNDE5LTFjMDUtNDc1Ni04OTZlLTQ1ZDYzMzcyNjU5YiIsImMiOjR9';
  // tslint:disable-next-line: max-line-length
       return  this.sanitizer.bypassSecurityTrustResourceUrl('https://app.powerbi.com/view?r=eyJrIjoiMmU4NjQyN2EtZmE3YS00ZmI5LWE4MmUtZjEyYmRiOGMxNWNmIiwidCI6IjM0ZjMyNDE5LTFjMDUtNDc1Ni04OTZlLTQ1ZDYzMzcyNjU5YiIsImMiOjR9');
           // return this.link = 'http://10.0.0.117:8081/Estadistica/';

          }
  } */

}
