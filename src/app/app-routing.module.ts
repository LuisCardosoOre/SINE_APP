import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'mapa', loadChildren: './pages/mapa/mapa.module#MapaPageModule' },
  { path: 'redes-lima', loadChildren: './pages/redes-lima/redes-lima.module#RedesLimaPageModule' },
  { path: 'lista-indicadores/:id', loadChildren: './pages/lista-indicadores/lista-indicadores.module#ListaIndicadoresPageModule' },
  { path: 'reporte/:id', loadChildren: './pages/reporte/reporte.module#ReportePageModule' },
  { path: 'grafico', loadChildren: './pages/grafico/grafico.module#GraficoPageModule' },
  { path: 'datos', loadChildren: './pages/datos/datos.module#DatosPageModule' },
  { path: 'prueba', loadChildren: './pages/prueba/prueba.module#PruebaPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
