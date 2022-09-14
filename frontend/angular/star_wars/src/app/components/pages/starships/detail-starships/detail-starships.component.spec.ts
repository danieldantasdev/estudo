import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStarshipsComponent } from './detail-starships.component';

describe('DetailStarshipsComponent', () => {
  let component: DetailStarshipsComponent;
  let fixture: ComponentFixture<DetailStarshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailStarshipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailStarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
