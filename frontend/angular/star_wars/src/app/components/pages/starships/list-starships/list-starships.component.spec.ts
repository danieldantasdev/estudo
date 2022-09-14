import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStarshipsComponent } from './list-starships.component';

describe('ListStarshipsComponent', () => {
  let component: ListStarshipsComponent;
  let fixture: ComponentFixture<ListStarshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStarshipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
