import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasAdoptanteComponent } from './mascotas-adoptante.component';

describe('MascotasAdoptanteComponent', () => {
  let component: MascotasAdoptanteComponent;
  let fixture: ComponentFixture<MascotasAdoptanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotasAdoptanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MascotasAdoptanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
