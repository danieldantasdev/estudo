import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, find, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../model/post';

const headers = new HttpHeaders().set('content-type', 'application/json');
const params = new HttpParams();

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  createPost(post: Post) {
    return this.http.post<Post>(environment.baseUrl + 'posts', post, {
      headers,
      params,
    });
  }

  readPosts() {
    return this.http.get<Post[]>(environment.baseUrl + 'posts');
  }

  readPostById(post: Post) {
    return this.http.get<Post>(environment.baseUrl + `posts/${post.id}`);
  }

  updatePost(post: Post) {
    return this.http.put<Post>(environment.baseUrl + `posts/${post.id}`, post, {
      headers,
      params,
    });
  }

  deletePost(post: Post) {
    return this.http.delete<Post>(environment.baseUrl + `posts/${post.id}`);
  }

  updateStatusPost(post: Post) {
    return this.http
      .patch<Post>(environment.baseUrl + `posts/${post.id}`, post.status, {
        headers,
        params,
      })
  }
}
