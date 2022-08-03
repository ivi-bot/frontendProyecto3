import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionFundacionComponent } from './informacion-fundacion.component';

describe('InformacionFundacionComponent', () => {
  let component: InformacionFundacionComponent;
  let fixture: ComponentFixture<InformacionFundacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionFundacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionFundacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
