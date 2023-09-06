import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  username: string | null = null;
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: string = '';

  constructor(
    private alertController: AlertController,
    private sharedService: SharedService
    ) {}

  async mostrarInformacion() {
      const alert = await this.alertController.create({
        header: 'Información del Usuario',
        message: ` ${this.nombre} ${this.apellido}`,
        buttons: ['Cerrar'],
      });

      await alert.present();
  }

  ngOnInit(){
    this.username = this.sharedService.getUsername();
  }

  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = '';
  }
}