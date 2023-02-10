import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LarAnimaisComponent } from './lar-animais.component';

describe('LarAnimaisComponent', () => {
  let component: LarAnimaisComponent;
  let fixture: ComponentFixture<LarAnimaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LarAnimaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LarAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
