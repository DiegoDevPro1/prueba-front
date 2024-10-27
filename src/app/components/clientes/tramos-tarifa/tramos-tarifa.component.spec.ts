import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramosTarifaComponent } from './tramos-tarifa.component';

describe('TramosTarifaComponent', () => {
  let component: TramosTarifaComponent;
  let fixture: ComponentFixture<TramosTarifaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TramosTarifaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TramosTarifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
