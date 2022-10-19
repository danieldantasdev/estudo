/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LivePage } from './live.page';

describe('LivePage', () => {
  let component: LivePage;
  let fixture: ComponentFixture<LivePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
