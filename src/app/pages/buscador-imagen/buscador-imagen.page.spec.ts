import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuscadorImagenPage } from './buscador-imagen.page';

describe('BuscadorImagenPage', () => {
  let component: BuscadorImagenPage;
  let fixture: ComponentFixture<BuscadorImagenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorImagenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuscadorImagenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
