import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpeciesService {
  constructor(private http: HttpClient) {}

  getSpecies(species: string) {
    return this.http.get(environment.starWarsUrl + species);
  }

  getSpeciesById(species: string, id: string) {
    return this.http.get(environment.starWarsUrl + species + id);
  }
}
