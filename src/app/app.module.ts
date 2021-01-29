import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuListaComponent } from './menu-lista/menu-lista.component';
import { InformacionPersonaComponent } from './informacion-persona/informacion-persona.component';
import { ActualizarPersonaComponent } from './actualizar-persona/actualizar-persona.component';
import { HttpClientModule } from '@angular/common/http'
import { ApiPersonaService } from './services/api-persona.service';
import { VistaInicialComponent } from './vista-inicial/vista-inicial.component';
import { FormsModule } from '@angular/forms';
import { FormaComponent } from './forma/forma.component';
import { IngresarComponent } from './ingresar/ingresar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuListaComponent,
    InformacionPersonaComponent,
    ActualizarPersonaComponent,
    VistaInicialComponent,
    FormaComponent,
    IngresarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiPersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
