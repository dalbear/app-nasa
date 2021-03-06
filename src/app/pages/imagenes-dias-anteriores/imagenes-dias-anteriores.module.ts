import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagenesDiasAnterioresPageRoutingModule } from './imagenes-dias-anteriores-routing.module';
import { SafePipe } from "../../pipe/safe.pipe";
import { ImagenesDiasAnterioresPage } from './imagenes-dias-anteriores.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagenesDiasAnterioresPageRoutingModule,
    ComponentsModule //TREMOS EL COMPONNENTMODULE
  ],
  declarations: [SafePipe,ImagenesDiasAnterioresPage]
})
export class ImagenesDiasAnterioresPageModule {}
