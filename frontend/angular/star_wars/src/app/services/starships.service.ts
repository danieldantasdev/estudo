import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StarshipsService {
  constructor(private http: HttpClient) {}

  getStarships(starships: string) {
    return this.http.get(environment.starWarsUrl + starships);
  }

  getStarshipsById(starships: string, id: string) {
    return this.http.get(environment.starWarsUrl + starships + id);
  }
}
