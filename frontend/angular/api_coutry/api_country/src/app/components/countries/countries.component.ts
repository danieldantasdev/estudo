import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Country } from 'src/app/model/country/country';
import { CountryService } from 'src/app/services/country/country.service';

import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit, AfterViewInit {
  // exampleDatabase: Country[] | null = [];
  displayedColumns: string[] = ['created', 'state', 'number', 'title'];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  countries: Country[] = [];
  pageSize = 10;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private countryService: CountryService,
    private _httpClient: HttpClient
  ) {}

  ngOnInit(): void {}

  // public getCountryAll() {
  //   this.countryService
  //     .getAllCountries('created', 'desc', 0)
  //     .subscribe((data) => {
  //       this.countries = data;
  //       this.resultsLength = this.countries.length;
  //       this.isLoadingResults = false;
  //     });

  /*   ngAfterViewInit() {
    // this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);
    this.countries = new Array<Country>();

    // If the user changes the sort order, reset back to the first page.
    this.sort = new MatSort();
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 1));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.countryService
            .getAllCountries(
              this.sort.active || 'Brazil',
              this.sort.direction || 'desc',
              this.paginator.pageIndex || 0
            )
            .pipe(catchError(() => observableOf(null)));
        }),
        map((countries) => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = countries === null;

          if (countries === null) {
            return [];
          }

          // Only refresh the result length if there is new data. In case of rate
          // limit errors, we do not want to reset the paginator to zero, as that
          // would prevent users from re-triggering requests.
          this.resultsLength = countries.total_count;
          return countries.items;
        })
      )
      .subscribe((countries) => (this.countries = countries));
  } */

  ngAfterViewInit() {
    this.countryService
      .getAllCountries('brazil', 'desc', 0)
      .subscribe((data) => {
        this.countries = data;
        this.resultsLength = this.countries.length;
        this.isLoadingResults = false;

        data.sort((a: any, b: any) => {
          return a.name.common > b.name.common ? 1 : -1;
        });
      });
  }
}
