import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Renderer2 } from '@angular/core';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

import { User } from '../model/User';

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
export class UserService {
  url = environment.apiServer + 'user';

  constructor(private http: HttpClient) {}

  readById(idUsuario: any): Observable<User> {
    const apiUrl = `${this.url}/${idUsuario}`;
    return this.http.get<User>(apiUrl, httpOptions);
  }

  readAll(): Observable<User[]> {
    const apiUrl = `${this.url}`;
    return this.http.get<User[]>(apiUrl, httpOptions);
  }

  savePhoto(files: File): Observable<File> {
    const apiUrl = `${environment.apiServer}salvarFoto`;

    // const formData = new FormData();
    // formData.append('file', files, files.name);

    return this.http.post<File>(apiUrl, files, {
      observe: 'body',
      reportProgress: true,
    });
  }

  convertFile(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) =>
      result.next(btoa(event.target!.result!.toString()));
    return result;
  }

  dataURItoBlob(dataURI: any) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/png' });
    return blob;
  }

  create(user: User): Observable<User> {
    const apiUrl = `${this.url}`;
    return this.http.post<User>(apiUrl, user, httpOptions);
  }
}
