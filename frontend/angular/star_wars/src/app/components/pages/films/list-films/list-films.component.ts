import { Component, OnInit, AfterViewInit } from '@angular/core';

import { FilmsService } from 'src/app/services/films.service';
import { Films } from '../../../../model/films';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.sass'],
})
export class ListFilmsComponent implements OnInit {
  constructor(private filmsService: FilmsService) {}

  public films!: any;

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms() {
    this.filmsService.getFilms('films').subscribe((data:Films[]) => {
      this.films = data;
      // console.log(this.films);
    });
  }
}
