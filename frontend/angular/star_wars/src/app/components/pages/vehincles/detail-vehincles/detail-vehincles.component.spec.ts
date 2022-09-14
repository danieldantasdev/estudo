import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailVehinclesComponent } from './detail-vehincles.component';

describe('DetailVehinclesComponent', () => {
  let component: DetailVehinclesComponent;
  let fixture: ComponentFixture<DetailVehinclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailVehinclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailVehinclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
