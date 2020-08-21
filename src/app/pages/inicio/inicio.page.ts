import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  fecha: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  cambioFecha (event){
    console.log('ionChange',event);
    console.log('Date', new Date(event.detail.value));
  }

}
