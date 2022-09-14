import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VehinclesService {
  constructor(private http: HttpClient) {}

  getVehicles(vehicles: string) {
    return this.http.get(environment.starWarsUrl + vehicles);
  }

  getVehiclesById(vehicles: string, id: string) {
    return this.http.get(environment.starWarsUrl + vehicles + id);
  }
}
