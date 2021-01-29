import { Component, OnInit } from '@angular/core';
import { ApiPersonaService } from '../services/api-persona.service';

@Component({
  selector: 'app-forma',
  templateUrl: './forma.component.html',
  styleUrls: ['./forma.component.css']
})
export class FormaComponent implements OnInit {



  constructor(public apiPersona: ApiPersonaService) { }

  ngOnInit(): void {
  }

}
