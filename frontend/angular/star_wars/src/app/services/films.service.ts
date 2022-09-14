import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Films } from '../model/films';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  constructor(private http: HttpClient) {}

  getFilms(films: string): Observable<Films[]> {
    return this.http.get<Films[]>(environment.starWarsUrl + films);
  }

  getFilmsById(films: string, id: string) {
    return this.http.get<Films>(environment.starWarsUrl + films + id);
  }
}
