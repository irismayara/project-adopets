import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaRacoesComponent } from './casa-racoes.component';

describe('CasaRacoesComponent', () => {
  let component: CasaRacoesComponent;
  let fixture: ComponentFixture<CasaRacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasaRacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasaRacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
