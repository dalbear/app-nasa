import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//mandamos a traer el HttpClient
import{HttpClientModule} from '@angular/common/http'; //PARA CONECTARNOS CON UN CLIENTE EXTERNO

@Injectable({
  providedIn: 'root'
})
export class ApiNasaService {
  
  
    private apiUrlCompleted = `https://api.nasa.gov/planetary/apod?api_key=fudURmL6zNhqegZOI9kRsHZWdVyHjJnGScPDDNbU`;
    private apiUrl = `https://api.nasa.gov/planetary`;
    private key = `fudURmL6zNhqegZOI9kRsHZWdVyHjJnGScPDDNbU`

  constructor( private http:HttpClient) { }


  mostrarImagen(){
    return this.http.get(`${this.apiUrlCompleted} `);
  }

    //Funcion de los dias pasados
  mostrarImagenes(date){
    return this.http.get(`${this.apiUrl}/apod?date=${date}&api_key=${this.key}`)
  }


}
