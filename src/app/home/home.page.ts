import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  static usuario: string = '';
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: string = '';

  constructor(private alertController: AlertController) {}

  async mostrarInformacion() {
      const alert = await this.alertController.create({
        header: 'Información del Usuario',
        message: ` ${this.nombre} ${this.apellido}`,
        buttons: ['Cerrar'],
      });

      await alert.present();
  }

  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = '';
  }
}