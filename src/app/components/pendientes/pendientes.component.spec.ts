import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendientesComponent } from './pendientes.component';

describe('PendientesComponent', () => {
  let component: PendientesComponent;
  let fixture: ComponentFixture<PendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendientesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
