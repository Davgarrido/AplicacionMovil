import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reestablecer',
  templateUrl: './reestablecer.page.html',
  styleUrls: ['./reestablecer.page.scss'],
})
export class ReestablecerPage implements OnInit {
  static Usuario: string = '';
  usuario: string = '';
  Nueva_Contrasena: string = '';
  Confirma_nueva_contrasena: string = '';

  constructor() { }

  ngOnInit() {
  }

}