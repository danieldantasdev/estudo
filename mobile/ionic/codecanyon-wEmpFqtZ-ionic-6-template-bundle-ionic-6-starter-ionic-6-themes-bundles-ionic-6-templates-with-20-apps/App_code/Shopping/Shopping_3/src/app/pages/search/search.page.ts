import { DummyService } from './../../services/dummy.service';
/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

    history = [
        'Purple Lips', '3CE', 'Spring Collection 2021'
    ];

    popular = [
        'Herbivore', 'Cinema Secrets', 'Hair', 'Dyson', 'Eyelash Tool', 'Blender'
    ];

    products = [];

    constructor(private dummy: DummyService) {
        this.products = this.dummy.products;
    }

    ngOnInit() {
    }

}
