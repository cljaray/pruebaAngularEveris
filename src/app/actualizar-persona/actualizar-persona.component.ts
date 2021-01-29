import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPersonaService } from '../services/api-persona.service';

@Component({
  selector: 'app-actualizar-persona',
  templateUrl: './actualizar-persona.component.html',
  styleUrls: ['./actualizar-persona.component.css']
})
export class ActualizarPersonaComponent implements OnInit {

  constructor(public apiPersona: ApiPersonaService, private router: Router) { }

  ngOnInit(): void {
  }

  guardar() {
    this.apiPersona.guardar().subscribe( personaActualizada => {
      console.log(personaActualizada)
      if(personaActualizada){
        this.apiPersona.actualizarTodasLasPersonas();
        this.router.navigate([`/informacion/${personaActualizada.id}`]);
      }
    })
  }

  ingresarNuevo() {
    this.router.navigate(["/ingresar"]);
  }

}
