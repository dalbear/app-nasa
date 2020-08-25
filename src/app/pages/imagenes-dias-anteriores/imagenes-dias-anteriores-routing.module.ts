import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagenesDiasAnterioresPage } from './imagenes-dias-anteriores.page';
import { ComponentsModule } from 'src/app/components/components.module';


const routes: Routes = [
  {
    path: '',
    component: ImagenesDiasAnterioresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ComponentsModule],
  exports: [RouterModule],
})
export class ImagenesDiasAnterioresPageRoutingModule {
  
  
}
