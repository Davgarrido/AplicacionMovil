import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({  
  selector: 'app-reestablecer',
  templateUrl:'./reestablecer.page.html',
  styleUrls: ['./reestablecer.page.scss'],  
})
export class ReestablecerPage implements OnInit {
  Correo: string = '';
  
  constructor(
    public alertController:AlertController,
    public navCtrl: NavController,

    ) {}
  
    async Cambio_contrasena(){
    const alert=await this.alertController.create({
      header:"Cambio de contraseña",
      message:"Se ha mandado un enlace a su correo para restablecer",
      buttons:[{
        text: 'Aceptar',
        handler: () => {
          this.navCtrl.navigateForward('/login');
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