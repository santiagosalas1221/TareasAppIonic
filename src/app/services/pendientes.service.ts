import { Injectable } from '@angular/core';
import {Pendiente} from '../models/pendiente.model'

@Injectable({
  providedIn: 'root'
})
export class PendientesService {
  pendientes: Pendiente[] = [];

  constructor() { 
    this.cargarStorage();
  }

  crearPendiene(titulo:string){
    const nuevoPendiente = new Pendiente(titulo);
    this.pendientes.push(nuevoPendiente);
    this.guardarStorage();
    return nuevoPendiente.id;
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.pendientes));
  }

  cargarStorage(){
    if(localStorage.getItem('data')){
      this.pendientes = JSON.parse(localStorage.getItem('data'));
    }
  }
}
