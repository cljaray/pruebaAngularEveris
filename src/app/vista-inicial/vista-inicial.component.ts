import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-inicial',
  templateUrl: './vista-inicial.component.html',
  styleUrls: ['./vista-inicial.component.css']
})
export class VistaInicialComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ingresar(){
    this.router.navigate(["/ingresar"])
  }

}
