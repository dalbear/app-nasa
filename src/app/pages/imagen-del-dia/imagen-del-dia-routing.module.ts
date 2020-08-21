import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagenDelDiaPage } from './imagen-del-dia.page';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: ImagenDelDiaPage
  }
];

@NgModule({
  //Traemos el componentModule
  imports: [RouterModule.forChild(routes),ComponentsModule],
  exports: [RouterModule],
})
export class ImagenDelDiaPageRoutingModule {}
