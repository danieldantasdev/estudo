import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVehinclesComponent } from './list-vehincles.component';

describe('ListVehinclesComponent', () => {
  let component: ListVehinclesComponent;
  let fixture: ComponentFixture<ListVehinclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVehinclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVehinclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
