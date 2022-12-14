import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { DadosLogin } from '../model/DadosLogin';
import { DadosRegistro } from '../model/DadosRegistro';
import { User } from './../model/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    Accept: 'application/json',
    responseType: 'blob' as 'json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  url = environment.apiServer + 'user';

  constructor(private http: HttpClient) {}

  readById(idUsuario: User['id']): Observable<User> {
    const apiUrl = `${this.url}/${idUsuario}`;
    return this.http.get<User>(apiUrl, httpOptions);
  }

  readAll(): Observable<User[]> {
    const apiUrl = `${this.url}`;
    return this.http.get<User[]>(apiUrl, httpOptions);
  }

  savePhoto(file: any): Observable<any> {
    // const formData = new FormData();
    // formData.append('file', file, file.name);

    const apiUrl = `${environment.apiServer}salvarFoto`;
    return this.http.post<any>(apiUrl, file);
  }

  public uploadFile<T>(file: File): Observable<T> {
    let formData = new FormData();
    formData.append('file', file, file.name);

    var request = this.http.post<T>(this.url, formData);
    return request;
  }

  create(user: User): Observable<User> {
    const apiUrl = `${this.url}`;
    return this.http.post<User>(apiUrl, user, httpOptions);
  }

  LogarUser(dadosLogin: DadosLogin): Observable<any> {
    const apiUrl = `${this.url}/LogarUser`;
    return this.http.post<DadosRegistro>(apiUrl, dadosLogin);
  }
}
