import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {PartidaComponent} from './partida/partida.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'partida',
        component: PartidaComponent
      },
      {
        path: 'map',
        component: MapComponent
      },
    
    {
      path: 'configuracion',
      component: ConfiguracionComponent

    },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
