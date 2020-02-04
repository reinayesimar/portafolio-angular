import { Component } from '@angular/core';
import { InfoPaginasService } from './services/info-paginas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio1';

  constructor( public infoPaginaService: InfoPaginasService) {

  }
}
