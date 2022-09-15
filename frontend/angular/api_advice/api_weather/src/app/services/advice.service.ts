import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdviceService {
  constructor(private http: HttpClient) {}

  getAdvices() {
    return this.http.get(`${environment.baseUrl}`);
  }

  getAdvicesById(id: string) {
    return this.http.get(`${environment.baseUrl}/` + id);
  }
}
