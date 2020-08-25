import { Component, OnInit } from '@angular/core';
import{ApiNasaService} from '../../services/api-nasa.service'; //INYECTAMOS EL SERVICIO
import * as moment from 'moment'; //IMPORTAMOS MOMENT JS


@Component({
  selector: 'app-semana',
  templateUrl: './semana.page.html',
  styleUrls: ['./semana.page.scss'],
})
export class SemanaPage implements OnInit {
//HACEMOS LA OPERACION DE LOS 8 DIAS
public maxDate = moment().format();
public minDate = moment().subtract(7,'d').format();


//FUNCION QUE MUESTRA EL DIV OCULTO
Mostrar(){
  document.getElementById('ocultar').style.display="block";
}

  
  fecha: Date = new Date();

  //VARIABLES DE  LA API
  date:string;
  explanation:string;
  url:string;
  title:string;
  mimeType: string;


  customPickerOptions;
 
    
constructor(private servicioNasa:ApiNasaService) { 
 
  this.customPickerOptions = {
    buttons: [{
      text: 'Elegir',
      handler: (evento) => {
     
        //console.log(evento.year.value,evento.month.value,evento.day.value);
      //OBTENEMOS LAS VARIABLES DEL CALENDARIO   
      let ano = evento.year.value;
      let mes = evento.month.value;
      let dia = evento.day.value;
      let fechaCompleta = ano+"-"+mes+"-"+dia;
     
      // DESDE AQUI LLEVO LOS PARAMETROS AL SERVICIO DE LA API DE LA NASA 
      this.servicioNasa.mostrarImagenes(fechaCompleta).subscribe((res:any) => {
        this.date = res.date;
        this.explanation = res.explanation;
        this.url = res.url;
        this.title= res.title;
        this.mimeType=res.media_type;
        this.Mostrar();
       
      });
    }
  },
   {
      text: 'Salir',
      handler: (evento) => {
        //console.log('Clicked Log. Do not Dismiss.');
        
      }
    }]
  };
 
}



ngOnInit() {
}
}
