import { Component, OnInit } from '@angular/core';
import{ApiNasaService} from '../../services/api-nasa.service'; //INYECTAMOS EL SERVICIO

@Component({
  selector: 'app-imagen-del-dia',
  templateUrl: './imagen-del-dia.page.html',
  styleUrls: ['./imagen-del-dia.page.scss'],
})
export class ImagenDelDiaPage implements OnInit {
   
    date:string;
    explanation:string;
    url:string;
    title:string;
    mimeType: string;


    constructor(private servicioNasa : ApiNasaService) {
      this.servicioNasa.mostrarImagen().subscribe(
        (res:any) => {
          this.date = res.date;
          this.explanation = res.explanation;
          this.url = res.url;
          this.title= res.title;
          this.mimeType=res.media_type;
         
        }
      );
    }
     

  ngOnInit() {
  }

}
