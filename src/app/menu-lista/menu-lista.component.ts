import { Component, OnInit } from '@angular/core';
import { ApiPersonaService } from '../services/api-persona.service';

@Component({
  selector: 'app-menu-lista',
  templateUrl: './menu-lista.component.html',
  styleUrls: ['./menu-lista.component.css']
})
export class MenuListaComponent implements OnInit {

  constructor(public apiPersona: ApiPersonaService) { }

  ngOnInit(): void {
    this.apiPersona.buscarTodos().subscribe(personas => {
      console.log(personas)
      if(personas){
        this.apiPersona.todasLasPersonas = personas;
      }
    }, error => {
      console.log(error)
    });
  }


}
