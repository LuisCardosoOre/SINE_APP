import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },

  { path: 'mapa', loadChildren: './pages/indicadores/mapa/mapa.module#MapaPageModule' },
  { path: 'lista-indicadores', loadChildren: './pages/indicadores/lista-indicadores/lista-indicadores.module#ListaIndicadoresPageModule' },
  { path: 'graficos', loadChildren: './pages/indicadores/graficos/graficos.module#GraficosPageModule' },
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },  { path: 'reporte', loadChildren: './pages/reporte/reporte.module#ReportePageModule' },
  { path: 'reporte', loadChildren: './pages/indicadores/reporte/reporte.module#ReportePageModule' }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
