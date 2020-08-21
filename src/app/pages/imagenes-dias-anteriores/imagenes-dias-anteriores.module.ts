import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagenesDiasAnterioresPageRoutingModule } from './imagenes-dias-anteriores-routing.module';

import { ImagenesDiasAnterioresPage } from './imagenes-dias-anteriores.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagenesDiasAnterioresPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ImagenesDiasAnterioresPage]
})
export class ImagenesDiasAnterioresPageModule {}
