import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module'; // TRAEMOS EL COMPONENTE QUE CREAMOS
//El app IonicModule importa todos los componentes de Ionic
import{HttpClientModule} from '@angular/common/http'; //PARA CONECTARNOS CON UN CLIENTE EXTERNO
import{ApiNasaService} from '../../src/app/services/api-nasa.service'; //TRAEMOS EL SERVICIOion
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,ComponentsModule,HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ApiNasaService //TRAEMOS EL SERVICIO
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
