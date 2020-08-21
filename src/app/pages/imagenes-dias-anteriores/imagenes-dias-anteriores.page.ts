import { Component, OnInit } from '@angular/core';
import{ApiNasaService} from '../../services/api-nasa.service'; //INYECTAMOS EL SERVICIO

@Component({
  selector: 'app-imagenes-dias-anteriores',
  templateUrl: './imagenes-dias-anteriores.page.html',
  styleUrls: ['./imagenes-dias-anteriores.page.scss'],
})





export class ImagenesDiasAnterioresPage implements OnInit {
    
  
    dates:string;
    explanation:string;
    url:string;
    title:string;


      
  constructor(private servicioNasa:ApiNasaService) { }
 
    
  getTask() {     
  let fecha = new Date();
  let fechas = [];
  for(let i = 1; i <= 8; i++){
      fechas.push(fecha.getFullYear(),fecha.getMonth()+1,fecha.getDate()-i,);

}
    let  dateTime = new Date();
      //dateTime.toDateString
    //this.taskService.getDay(this.datePipe.transform(dateTime,"yyyy-MM-dd"))
    this.servicioNasa.mostrarImagenes(`${fechas[3]}-${fechas[4]}-${fechas[5]}`,`fudURmL6zNhqegZOI9kRsHZWdVyHjJnGScPDDNbU`)
    .subscribe(tasks => {
      console.log(tasks);
    });
  }



  ngOnInit() {
  }

}
