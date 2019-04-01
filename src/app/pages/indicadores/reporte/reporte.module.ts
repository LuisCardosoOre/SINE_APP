import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportePage } from './reporte.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'account'
  },
  {
    path: '',
    component: ReportePage,
    children: [
      {
        path: 'datos/:id',
        loadChildren: '../datos/datos.module#DatosPageModule'
      },
      {
        path: 'grafico/:id',
        loadChildren: '../grafico/grafico.module#GraficoPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportePage]
})

export class ReportePageModule {

}
