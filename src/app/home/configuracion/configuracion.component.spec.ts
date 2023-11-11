import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfiguracionComponent } from './configuracion.component';
import { RouterModule } from '@angular/router';

describe('ConfiguracionComponent', () => {
  let component: ConfiguracionComponent;
  let fixture: ComponentFixture<ConfiguracionComponent>;

  beforeEach(waitForAsync(() => {
    /*TestBed.configureTestingModule({
      declarations: [ ConfiguracionComponent ],
      imports: [IonicModule.forRoot(),RouterModule]
    }).compileComponents();*/

    fixture = TestBed.createComponent(ConfiguracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
