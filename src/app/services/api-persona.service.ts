import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class ApiPersonaService {

  todasLasPersonas: Persona[];
  personaActual: Persona;

  constructor(private http: HttpClient ) { }


  buscarTodos(): Observable<any>{
    return this.http.get(`${environment.baseUrl}/all`)
  }

  buscarPorId(id: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}/find/${id}`)
  }

  guardar(): Observable<any>{
    return this.http.post(`${environment.baseUrl}/save`, this.personaActual)
  }

  actualizarTodasLasPersonas(){
    this.buscarTodos().subscribe( personas => {
      if(personas){
        this.todasLasPersonas = personas;
      }
    })
  }

  setPersonaActual(persona: Persona){
    this.personaActual = persona;
  }

  getPersonActual(){
    return this.personaActual
  }
}
