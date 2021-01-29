import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualizarPersonaComponent } from './actualizar-persona/actualizar-persona.component';
import { InformacionPersonaComponent } from './informacion-persona/informacion-persona.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { VistaInicialComponent } from './vista-inicial/vista-inicial.component';

const routes: Routes = [
  { path:"", component:VistaInicialComponent},
  { path: "informacion/:id", component: InformacionPersonaComponent },
  { path: "actualizar", component: ActualizarPersonaComponent },
  { path: "ingresar", component: IngresarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
