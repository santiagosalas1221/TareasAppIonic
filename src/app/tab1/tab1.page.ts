import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PendientesService } from '../services/pendientes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private alertController: AlertController,
              private pendienteService: PendientesService) {}

  async agregarPendiente(){
    const alert = await this.alertController.create({
      header: 'Nuevo Pendiente', 
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre del pendiente'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Crear',
          handler: (data) => {
            console.log(data);
            if(data.titulo.lenght==0){
              return;
            }
            const id = this.pendienteService.crearPendiene(data.titulo);
          }
        }
      ]
    });
    await alert.present();
  }
}
