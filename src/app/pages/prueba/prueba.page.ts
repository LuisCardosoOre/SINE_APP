import { Component, OnInit, ViewChild } from '@angular/core';
import chartJs from 'node_modules/chart.js';
import { Options } from 'selenium-webdriver/safari';
import { LoadingController, AngularDelegate } from '@ionic/angular';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {
@ViewChild('barCanvas') barCanvas;
@ViewChild('lineCanvas') lineCanvas;
@ViewChild('pieCanvas') pieCanvas;
@ViewChild('doughnutCnvas') doughnutCanvas;

barChart: any;
lineChart: any;
pieChart: any;
doughnutChart: any;


users: any;
data2: string [];
nombres: string [];
variable1: string [];
id: any [];
title: any [];

  constructor(public api: RestService, public loadingController: LoadingController) { }

  ngOnInit() {

    setTimeout(() => {
      this.barChart = this.getBarChart();
      this.pieChart = this.getPieChart();
    }, 150 );

    this.getUsers();
  }

  getChart(context, chartType, data, options) {
    return new chartJs(context,{
      data,
      options,
      type: chartType
    })
  }

getBarChart() {
  const data = {
    labels: [ 'Verde', 'Azul', 'Amarillo', 'Rojo'],
    datasets: [{
      label: 'Número de votos',
      data: [12,23,15,90],
      backgroundColor: [
        'rgb(255,0,0)',
        'rgb(20,0,255)',
        'rgb(255,230,0)',
        'rgb(0,255,10)'

      ],
      borderWidth: 1
      

    }]
  };
  const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);
}

getPieChart() {
  const data = {
    labels: this.nombres,
    datasets: [{
      data: this.data2,
      backgroundColor: [
        'rgb(255,0,0)',
        'rgb(20,0,255)',
        'rgb(255,230,0)',
        'rgb(0,255,10)']
    }]
  };
  const options = {

  };
  return this.getChart(this.pieCanvas.nativeElement, 'pie', data, options);
}


async getUsers() {
  this.api.getUsers()
  .then(data => {
    this.users = data;
  //console.log(this.users);
    
this.data2 = [this.users[9].userId,this.users[8].userId,this.users[7].userId,this.users[8].userId];
this.nombres = [this.users[9].title,this.users[8].title,this.users[7].title,this.users[8].title];
//console.log(this.data2)
  this.users.forEach(element => {
    
    let var1  = element;
    //let obj  = JSON.parse(var1);
  //console.log(var1);


  //console.log(element)
    });

//this.variable1 = [this.users]
//let var1 = this.variable1.length;

let jsonArray = this.users;
  this.id = [];
  this.title = [];

/*   for(let i = 0; i < jsonArray.length ; i++){
    let jsonObject = jsonArray[i];
    this.id.push(jsonObject.userId);
    this.id.push(jsonObject.title);
    console.log(this.id[i]);
  }
 */

  });


  
}

//parseJson(data){
  //let jsonArray = data;
  //this.id = [];

  //for(let i = 0; i < jsonArray.length ; i++){

    //  let jsonObject = jsonArray[i];
    //  this.id.push(jsonObject.userId);
    //  this.id.push(jsonObject.title);
 // }

//}


}
