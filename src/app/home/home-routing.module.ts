import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {PartidaComponent} from './partida/partida.component';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'partida',
        component: PartidaComponent
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
