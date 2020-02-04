import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginasService {
  
  info: InfoPagina = {};
  cargada = false;

  constructor( private http: HttpClient ) {
    // leer los datos del json y utilizar sus propiedades
    this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp: InfoPagina) => {
          this.cargada = true;
          this.info = resp;
          console.log(resp);
        });
  }

}
