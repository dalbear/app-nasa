import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagenDelDiaPageRoutingModule } from './imagen-del-dia-routing.module';
import { SafePipe } from "../../pipe/safe.pipe";

import { ImagenDelDiaPage } from './imagen-del-dia.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagenDelDiaPageRoutingModule,
    ComponentsModule //TRAEMOS EL COMPONENTE
  ],
  declarations: [SafePipe,ImagenDelDiaPage]
})
export class ImagenDelDiaPageModule {}
