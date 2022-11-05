import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/assets/courses.json';

  constructor(private http: HttpClient) {}

  create = (course: Course): Observable<Course> => {
    return this.http.post<Course>(this.API, course).pipe();
  };

  readAll = (): Observable<Course[]> => {
    // return [{ _id: '1', name: 'Angular', category: 'Front-end' }];
    return this.http.get<Course[]>(this.API).pipe(
      take(1),
      first(),
      delay(2000),
      tap((courses) => console.log(courses))
    );
  };

  readByID = (id: Course['_id']): Observable<Course> => {
    return this.http.get<Course>(`${this.API}/${id}`).pipe();
  };

  update = (course: Course): Observable<Course> => {
    return this.http.put<Course>(`${this.API}/${course._id}`, course).pipe();
  };

  delete = (id: Course['_id']): Observable<Course> => {
    return this.http.delete<Course>(`${this.API}/${id}`).pipe();
  };
}
