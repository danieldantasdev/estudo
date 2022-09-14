import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  constructor(private http: HttpClient) {}

  getPlanets(planets: string) {
    return this.http.get(environment.starWarsUrl + planets);
  }

  getPlanetsById(planets: string, id: string) {
    return this.http.get(environment.starWarsUrl + planets + id);
  }
}
