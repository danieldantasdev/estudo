import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

import { Course } from './model/course';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // courses: Course[] = [{ _id: '1', name: 'Angular', category: 'Front-end' }];
  // courses: Course[] = [];
  courses$: Observable<Course[]>;
  displayedColumns: string[] = ['id', 'name', 'category'];

  constructor(private courseService: CoursesService, public dialog: MatDialog) {
    // this.courses = [];
    this.courses$ = this.courseService.readAll().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar cursos...');
        return of([]);
      })
    );
  }

  ngOnInit(): void {
    // this.readAll();
  }

  // readAll = () => {
  //   this.courseService.readAll().subscribe(course => { this.courses = courses});
  // };

  onError = (errorMessage: string) => {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  };
}
