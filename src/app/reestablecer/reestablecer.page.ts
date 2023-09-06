import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({  
  selector: 'app-reestablecer',
  templateUrl:'./reestablecer.page.html',
  styleUrls: ['./reestablecer.page.scss'],  
})
export class ReestablecerPage implements OnInit {
  static Usuario: string = '';
  usuario: string = '';
  Nueva_Contrasena: string = '';
  Confirma_nueva_contrasena: string = '';
  
  constructor(
    public alertController:AlertController,
    public navCtrl: NavController,

    ) {}
  
    async Cambio_contrasena(){
    const alert=await this.alertController.create({
      header:"Cambio de contraseña",
      message:"Se ha cambiado la contraseña exitosamente",
      buttons:[{
        text: 'Siguiente',
        handler: () => {
          // Redirige al usuario a la página HomePage
          this.navCtrl.navigateForward('/home'); // Asegúrate de que '/home' sea la URL correcta para tu página de inicio
        }
      }
    ],

    });
    await alert.present()
  let result=await alert.onDidDismiss();
  console.log(result)
  }

  ngOnInit() {
  }

}

//let result=await alert.onDidDismiss();
// console.log(result)