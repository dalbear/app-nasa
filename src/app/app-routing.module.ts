import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'imagen-del-dia',
    loadChildren: () => import('./pages/imagen-del-dia/imagen-del-dia.module').then( m => m.ImagenDelDiaPageModule)
  },
  {
    path: 'imagenes-dias-anteriores',
    loadChildren: () => import('./pages/imagenes-dias-anteriores/imagenes-dias-anteriores.module').then( m => m.ImagenesDiasAnterioresPageModule)
  }
  

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
