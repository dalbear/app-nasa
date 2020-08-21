import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component'; //TRAEMOS EL HEADER COMPONENT
import { IonicModule } from '@ionic/angular';




@NgModule({
  declarations: [HeaderComponent],
  exports: [ //Esto hace que se pueda exportar a otros componentes 
    HeaderComponent
   ],
  imports: [
    CommonModule,
    IonicModule
  ],
  
  
})
export class ComponentsModule { }
