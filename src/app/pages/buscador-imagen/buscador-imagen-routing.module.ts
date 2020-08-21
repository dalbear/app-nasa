import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscadorImagenPage } from './buscador-imagen.page';

const routes: Routes = [
  {
    path: '',
    component: BuscadorImagenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscadorImagenPageRoutingModule {}
