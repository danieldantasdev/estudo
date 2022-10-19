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

import { TermsPage } from './terms.page';

describe('TermsPage', () => {
  let component: TermsPage;
  let fixture: ComponentFixture<TermsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TermsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
