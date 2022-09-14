import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFilmsComponent } from './detail-films.component';

describe('DetailFilmsComponent', () => {
  let component: DetailFilmsComponent;
  let fixture: ComponentFixture<DetailFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFilmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
