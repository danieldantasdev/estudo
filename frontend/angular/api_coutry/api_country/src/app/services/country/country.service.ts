import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

//Observable
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Country } from 'src/app/model/country/country';
import { SortDirection } from '@angular/material/sort';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountriesById(name: string): Observable<any> {
    return this.http.get<Country>(environment.api_url + name);
  }

  getAllCountries(
    sort: string,
    order: SortDirection,
    page: number
  ): Observable<any> {
    const href = environment.api_url;
    const requestUrl = `${href}?q=${sort}&order=${order}&page=${page + 1}`;
    return this.http.get<Country[]>(requestUrl);
  }

  getCountry(): Observable<any> {
    return this.http.get<Country>(environment.api_url).pipe(
      map((response) => {
        return response;
      }),
      tap((data) => console.log(data))
    );
  }
}
