import { Injectable } from '@angular/core';
import {Pendiente} from '../models/pendiente.model'

@Injectable({
  providedIn: 'root'
})
export class PendientesService {
  pendientes: Pendiente[];

  constructor() { }
}
