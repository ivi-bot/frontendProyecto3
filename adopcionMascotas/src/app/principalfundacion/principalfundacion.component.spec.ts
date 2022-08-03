import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalfundacionComponent } from './principalfundacion.component';

describe('PrincipalfundacionComponent', () => {
  let component: PrincipalfundacionComponent;
  let fixture: ComponentFixture<PrincipalfundacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalfundacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalfundacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
