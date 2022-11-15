import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, first, take, tap } from 'rxjs/operators';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  // private readonly API = '/assets/courses.json';
  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) {}

  save = (course: Partial<Course>): Observable<Course> => {
    if (course._id) {
      return this.update(course);
    }
    return this.create(course);
  };

  private create = (course: Partial<Course>): Observable<Course> => {
    return this.httpClient
      .post<Course>(this.API, course)
      .pipe(take(1), first());
  };

  readAll = (): Observable<Course[]> => {
    // return [{ _id: '1', name: 'Angular', category: 'Front-end' }];
    return this.httpClient.get<Course[]>(this.API).pipe(
      take(1),
      first(),
      delay(2000),
      tap((courses) => console.log(courses))
    );
  };

  readByID = (id: Course['_id']): Observable<Course> => {
    return this.httpClient.get<Course>(`${this.API}/${id}`).pipe();
  };

  private update = (course: Partial<Course>): Observable<Course> => {
    return this.httpClient
      .put<Course>(`${this.API}/${course._id}`, course)
      .pipe();
  };

  delete = (id: Course['_id']): Observable<Course> => {
    return this.httpClient.delete<Course>(`${this.API}/${id}`).pipe();
  };
}
