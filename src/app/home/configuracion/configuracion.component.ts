import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.scss'],
  standalone: true,

  imports: [IonicModule,RouterModule
  ]
})
export class ConfiguracionComponent  implements OnInit {
  

  constructor() { }

  ngOnInit() {}

}
