import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlanetsComponent } from './detail-planets.component';

describe('DetailPlanetsComponent', () => {
  let component: DetailPlanetsComponent;
  let fixture: ComponentFixture<DetailPlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPlanetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
