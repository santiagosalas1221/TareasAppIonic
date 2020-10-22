import { from } from 'rxjs';
import {Tarea} from './tarea.model'

export class Pendiente{
    id: number;
    titulo: string;
    creadoEn: Date;
    terminado: boolean;
    tareas: Tarea[];

    constructor(titulo: string) {
        this.titulo = titulo;
        this.id = new Date().getTime();
        this.creadoEn = new Date();
        this.terminado = false;
        this.tareas = [];
    }
}