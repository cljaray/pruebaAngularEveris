import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPersonaService } from '../services/api-persona.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  constructor(public apiPersona: ApiPersonaService, private router: Router) { }

  ngOnInit(): void {
    this.apiPersona.personaActual = {
      id: 0,
      nombre: "",
      apellido: "",
      fechaNacimiento: "",
      direccion:"",
      ciudad:"",
      pais: "", 
    }
  }

  ingresar(){
    this.apiPersona.guardar().subscribe( nuevaPersona => {
      console.log(nuevaPersona)
      if(nuevaPersona){
        this.apiPersona.personaActual = nuevaPersona
        this.apiPersona.actualizarTodasLasPersonas()
        this.router.navigate([`/informacion/${nuevaPersona.id}`])
      }
    })
  }
}
