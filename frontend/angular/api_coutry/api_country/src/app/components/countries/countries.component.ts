import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Country, CountryApi } from 'src/app/model/country/country';
import { CountryService } from 'src/app/services/country/country.service';

import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort, Sort, SortDirection } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit, AfterViewInit {
  // exampleDatabase: CountryApi | null[] = [];
  displayedColumns: string[] = ['area', 'capital', 'country', 'flag'];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  countries: Country[] = [];
  dataSource = new MatTableDataSource<Country>(this.countries);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private countryService: CountryService,
    private _httpClient: HttpClient,
    private _liveAnnouncer: LiveAnnouncer
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

  /*  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    // this.exampleDatabase = new CountryApi(this._httpClient);
    this.sort = new MatSort();
    this.dataSource.sort = this.sort;

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.countryService
            .getAllCountries(
              this.sort.active,
              this.sort.direction,
              this.paginator.pageIndex
            )
            .pipe(catchError(() => observableOf(null)));
        }),
        map((data) => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }

          // Only refresh the result length if there is new data. In case of rate
          // limit errors, we do not want to reset the paginator to zero, as that
          // would prevent users from re-triggering requests.
          this.resultsLength = data.length;
          return data;
        })
      )
      .subscribe((data) => (this.countries = data));
  } */

  ngAfterViewInit() {
    this.isLoadingResults = true;
    this.dataSource.paginator = this.paginator;
    this.countryService
      .getAllCountries('brazil', 'desc', 0)
      .subscribe((data) => {
        this.countries = data;
        this.resultsLength = this.countries.length;

        data.sort((a: any, b: any) => {
          return a.name.common > b.name.common ? 1 : -1;
        });
        this.isLoadingResults = false;
      });
  }
}
