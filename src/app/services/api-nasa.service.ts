import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//mandamos a traer el HttpClient
import{HttpClientModule} from '@angular/common/http'; //PARA CONECTARNOS CON UN CLIENTE EXTERNO

@Injectable({
  providedIn: 'root'
})
export class ApiNasaService {
  
  
    private apiUrlCompleted = `https://api.nasa.gov/planetary/apod?api_key=fudURmL6zNhqegZOI9kRsHZWdVyHjJnGScPDDNbU`;
    private apiUrl = `https://api.nasa.gov/planetary`;

  constructor( private http:HttpClient) { }


  mostrarImagen(){
    return this.http.get(`${this.apiUrlCompleted} `);
  }

  mostrarImagenes(date,key){
    return this.http.get(`${this.apiUrl}/apod?date=${date}&api_key=${key}`)
  }


}
