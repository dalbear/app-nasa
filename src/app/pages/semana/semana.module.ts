import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemanaPageRoutingModule } from './semana-routing.module';
import { SafePipe } from "../../pipe/safe.pipe";
import { SemanaPage } from './semana.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemanaPageRoutingModule,
    ComponentsModule //TREMOS EL COMPONNENTMODULE
  ],
  declarations: [SafePipe,SemanaPage]
})
export class SemanaPageModule {}
