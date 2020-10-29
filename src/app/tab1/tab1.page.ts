import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private alertController: AlertController) {}

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
          }
        }
      ]
    });
    await alert.present();
  }
}
