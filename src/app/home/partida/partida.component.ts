import { Component, ElementRef, ViewChild } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlertController, AnimationController, IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.scss'],
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule,IonicModule,
  CommonModule]
})
export class PartidaComponent {
  @ViewChild('animacion_bienvenida',{read: ElementRef})animacion_bienvenida:ElementRef;

  user: string | null = "";

  animation : any;

  constructor(
    private animationCtrl: AnimationController,
    private activeroute: ActivatedRoute,
    private router: Router,
    public alertController: AlertController) 
    
    {
    this.animacion_bienvenida = ElementRef.prototype as any;
    this.animation = Animation.prototype as any;
    
    if (!localStorage.getItem('isUserLoggedIn')) {
      this.router.navigate(['/login']);
    }
    else{ 
      this.user = localStorage.getItem('userName');
    }
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
    .create()
    .addElement(this.animacion_bienvenida.nativeElement)
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
