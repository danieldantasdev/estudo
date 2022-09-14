import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSpeciesComponent } from './detail-species.component';

describe('DetailSpeciesComponent', () => {
  let component: DetailSpeciesComponent;
  let fixture: ComponentFixture<DetailSpeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSpeciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
