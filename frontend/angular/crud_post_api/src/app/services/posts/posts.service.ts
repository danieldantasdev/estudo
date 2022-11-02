import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../model/post';
import { tap, delay, take } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private readonly API = `${environment.BASE_URL}${environment.API}`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Post[]>(this.API).pipe(delay(2000), tap(console.log));
  }

  loadByID(id: Post['id']) {
    return this.http.get<Post>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(post: Post) {
    return this.http.post(this.API, post).pipe(take(1));
  }

  private update(post: Post) {
    return this.http.put(`${this.API}/${post.id}`, post).pipe(take(1));
  }

  save(post: Post) {
    if (post.id) {
      return this.update(post);
    }
    return this.create(post);
  }

  remove(id: Post['id']) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
