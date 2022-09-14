import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPeoplesComponent } from './detail-peoples.component';

describe('DetailPeoplesComponent', () => {
  let component: DetailPeoplesComponent;
  let fixture: ComponentFixture<DetailPeoplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPeoplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPeoplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
