import { Component, OnInit } from '@angular/core';
import { PendientesService } from 'src/app/services/pendientes.service';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.scss'],
})
export class PendientesComponent implements OnInit {

  constructor( private pendienteService: PendientesService) { }

  ngOnInit() {}

}
