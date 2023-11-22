import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartidaComponent } from './partida.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginPage } from 'src/app/login/login.page';

describe('PartidaComponent', () => {
  let component: PartidaComponent;
  let fixture: ComponentFixture<PartidaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(),RouterTestingModule.withRoutes([{path:'login',component:LoginPage}])],
    }).compileComponents();

    fixture = TestBed.createComponent(PartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
