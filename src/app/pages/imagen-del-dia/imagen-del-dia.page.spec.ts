import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImagenDelDiaPage } from './imagen-del-dia.page';

describe('ImagenDelDiaPage', () => {
  let component: ImagenDelDiaPage;
  let fixture: ComponentFixture<ImagenDelDiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenDelDiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImagenDelDiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
