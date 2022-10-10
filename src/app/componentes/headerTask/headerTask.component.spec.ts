import { ComponentFixture, TestBed } from '@angular/core/testing';

import { headerTaskComponent } from './headerTask.component';

describe('headerTaskComponent', () => {
  let component: headerTaskComponent;
  let fixture: ComponentFixture<headerTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ headerTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(headerTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
