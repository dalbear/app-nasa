import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscadorImagenPageRoutingModule } from './buscador-imagen-routing.module';

import { BuscadorImagenPage } from './buscador-imagen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscadorImagenPageRoutingModule
  ],
  declarations: [BuscadorImagenPage]
})
export class BuscadorImagenPageModule {}
