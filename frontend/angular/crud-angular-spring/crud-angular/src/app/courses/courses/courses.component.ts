import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // courses: Course[] = [{ _id: '1', name: 'Angular', category: 'Front-end' }];
  // courses: Course[] = [];
  courses$: Observable<Course[]>;
  displayedColumns: string[] = ['id', 'name', 'category', 'actions'];

  constructor(
    private courseService: CoursesService,
    public _dialog: MatDialog,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
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
    this._dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  };

  onAdd = () => {
    this._router.navigate(['new'], { relativeTo: this._route });
  };
}
