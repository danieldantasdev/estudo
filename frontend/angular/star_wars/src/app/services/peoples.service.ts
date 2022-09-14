import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PeoplesService {
  constructor(private http: HttpClient) {}

  getPeoples(peoples: string) {
    return this.http.get(environment.starWarsUrl + peoples);
  }

  getPeoplesById(peoples: string, id: string) {
    return this.http.get(environment.starWarsUrl + peoples + id);
  }
}
