import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImagenesDiasAnterioresPage } from './imagenes-dias-anteriores.page';

describe('ImagenesDiasAnterioresPage', () => {
  let component: ImagenesDiasAnterioresPage;
  let fixture: ComponentFixture<ImagenesDiasAnterioresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesDiasAnterioresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImagenesDiasAnterioresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
