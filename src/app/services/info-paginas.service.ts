import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginasService {
  info: InfoPagina = {};
  cargada = false;
  equipo: any[] =  [];

  constructor( private http: HttpClient ) {
      this.cargarInfo();
      this.cargarEquipo();
  }

  private cargarInfo() {
     // leer los datos del json y utilizar sus propiedades
     this.http.get('assets/data/data-pagina.json')
     .subscribe( (resp: InfoPagina) => {
       this.cargada = true;
       this.info = resp;
     });
  }

  private cargarEquipo() {
      // leer los datos del json y utilizar sus propiedades del firebase
      this.http.get('https://angular-html-d4552.firebaseio.com/equipo.json')
      .subscribe( (resp: any[]) => {
        this.equipo = resp;
        
      });
  }

}
