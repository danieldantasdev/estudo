import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from '../../../../shared/components/error-dialog/error-dialog.component';

import { Course } from '../../../../core/model/course';
import { CoursesService } from '../../../../core/services/courses.service';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // courses: Course[] = [{ _id: '1', name: 'Angular', category: 'Front-end' }];
  // courses: Course[] = [];
  courses$: Observable<Course[]> | null = null;

  constructor(
    private courseService: CoursesService,
    public _dialog: MatDialog,
    private _router: Router,
    private _route: ActivatedRoute,
    private _snackbar: MatSnackBar
  ) {
    // this.courses = [];
    this.refresh();
  }

  ngOnInit(): void {
    // this.readAll();
  }

  refresh() {
    this.courses$ = this.courseService.readAll().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar cursos.');
        return of([]);
      })
    );
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

  onEdit = (course: Course) => {
    this._router.navigate(['edit', course._id], { relativeTo: this._route });
  };

  onDelete(course: Course) {
    const dialogRef = this._dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse curso?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.courseService.delete(course._id).subscribe(
          () => {
            this.refresh();
            this._snackbar.open('Curso removido com sucesso!', 'Fechar', {
              duration: 5000,
              verticalPosition: 'bottom',
              horizontalPosition: 'center',
            });
          },
          () => this.onError('Erro ao tentar remover curso.')
        );
      }
    });
  }
}
