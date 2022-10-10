import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemtaskComponent } from './itemtask.component';

describe('ItemtaskComponent', () => {
  let component: ItemtaskComponent;
  let fixture: ComponentFixture<ItemtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemtaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
