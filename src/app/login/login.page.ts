import { SharedService } from './../../services/shared.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { AnimationController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  @ViewChild('titulo', { read: ElementRef }) titulo: ElementRef;

  usuario: string = '';
  contrasena: string = '';

  animation : any;
  constructor(
    private navCtrl: NavController,
    private SharedService: SharedService,
    private animationCtrl: AnimationController
  ) 
  {
    this.titulo = ElementRef.prototype as any;
    this.animation = Animation.prototype as any;

  }
  ngAfterViewInit() {
    this.animation = this.animationCtrl
    .create()
    .addElement(this.titulo.nativeElement)
    .duration(2500)
    .iterations(Infinity)
    .keyframes([
      {offset: 0, transform: 'translateX(-50px)', opacity:0.2},
      {offset: 0.5, transform: 'translateX(150px)', opacity:2},
      {offset: 1, transform: 'translateX(150px)', opacity:0.2},
    ]);
    this.animation.play();


    setTimeout(() => {
      this.animation.stop();
    }, 4500);
  }


  agregarDatos() {
    if (this.usuario.length >= 3 && this.usuario.length <= 8 && /^\d{4}$/.test(this.contrasena)) {
      const usu = (document.querySelector('input[name="User"]') as HTMLInputElement).value;
      this.SharedService.setUsername(usu);

      this.navCtrl.navigateForward('/home');
    }
  }


}
