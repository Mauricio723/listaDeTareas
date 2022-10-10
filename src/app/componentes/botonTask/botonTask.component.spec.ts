import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonTaskComponent } from './botonTask.component';

describe('BotonTareasComponent', () => {
  let component: BotonTaskComponent;
  let fixture: ComponentFixture<BotonTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
