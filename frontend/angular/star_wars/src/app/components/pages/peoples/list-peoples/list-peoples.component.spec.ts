import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPeoplesComponent } from './list-peoples.component';

describe('ListPeoplesComponent', () => {
  let component: ListPeoplesComponent;
  let fixture: ComponentFixture<ListPeoplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPeoplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPeoplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
