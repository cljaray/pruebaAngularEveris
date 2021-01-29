import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Persona } from '../models/persona';
import { ApiPersonaService } from '../services/api-persona.service';

@Component({
  selector: 'app-informacion-persona',
  templateUrl: './informacion-persona.component.html',
  styleUrls: ['./informacion-persona.component.css']
})
export class InformacionPersonaComponent implements OnInit {

  personaActual: Persona;
  id: number;

  constructor(
    private activeRoute: ActivatedRoute, 
    private apiPersona: ApiPersonaService,
    private router: Router
    ) { }

  ngOnInit(): void {    
    this.activeRoute.params.subscribe(ruta => {
      this.id = ruta.id;
      this.buscarPorId();
    })
  }

  buscarPorId(){
     this.apiPersona.buscarPorId(this.id).subscribe(persona => {
       console.log(persona);
       this.personaActual = persona;
       this.apiPersona.personaActual = persona;
     })
  }

  editar(){
    this.router.navigate(["/actualizar"])
  }

  ingresarNuevo(){
    this.router.navigate(["/ingresar"])
  }

}
