import { Component, OnInit,ElementRef, ViewChild  } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AutenticacionService } from '../autenticacion.service';
import { AnimationController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  @ViewChild('titulo', { read: ElementRef }) titulo: ElementRef;

  user={
    usuario:"",
    password:""
  }
  

  field:string="";
  animation: any;

  constructor(
    private router: Router,
    public toastController: ToastController, 
    private auth: AutenticacionService,
    private animationCtrl: AnimationController
    ) { 

      this.titulo = ElementRef.prototype as any;
      this.animation = Animation.prototype as any;
    }

  ngOnInit() {
  }

  ingresar(){
    
    try{
      if(this.validateModel(this.user)){
        let navigationExtras: NavigationExtras = {
          state: {
            user: this.user
          }
        };
        this.auth.login(this.user.usuario,this.user.password);
        this.router.navigate(['/home'],navigationExtras);
      }
      else{
        this.presentToast(this.field);
      }
      
    }
    catch(error){
      
      this.router.navigate(['/login']);
    }
    
  }

  validateModel(model:any){
    for (var [key, value] of Object.entries(model)) {
      if (value=="") {
        this.field="Falta : "+key;
        return false;
      }
    }
    
    var password = model.password;
    const regex = /^[0-9]*$/;
    const onlyNumbers = regex.test(password); // true
    if(!onlyNumbers){
      this.field = "Password invalida";
      return false;
    }
    else if(model.usuario.length < 3 || model.usuario.length > 8){
      this.field = "Usuario invalido";
      return false;
    }
    else if(model.password.length != 4){
      this.field = "Password invalida";
      return false;
    }
    return true;
  }

  async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }
  ngAfterViewInit() {
    this.animation = this.animationCtrl
    .create()
    .addElement(this.titulo.nativeElement)
    .duration(2500)
    .iterations(Infinity)
    .keyframes([
      {offset: 0.5, transform: 'translateX(-10px)', opacity:0.2},
      {offset: 0.5, transform: 'translateX(90px)', opacity:2},
      {offset: 1, transform: 'translateX(0px)', opacity:0.2},
    ]);
    this.animation.play();


    setTimeout(() => {
      this.animation.stop();
    }, 4900);
  }

}
