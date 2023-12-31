import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MapComponent } from './map/map.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule,MapComponent],
  standalone:true
})
export class HomePage {
  data: any;
  selectedSegment: string = 'partida';

  constructor(private router: Router) {
    this.router.navigate(['home/partida'])
  }

  segmentChanged(event : any){
    console.log(event.detail.value);
    let direction=event.detail.value
    this.router.navigate(['home/'+direction])
  }

}
