import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaIndicadoresPage } from './lista-indicadores.page';

const routes: Routes = [
  {
    path: '',
    component: ListaIndicadoresPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaIndicadoresPage]
})
export class ListaIndicadoresPageModule {}
