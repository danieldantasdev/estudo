import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { Course } from './../model/course';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    name: new FormControl<Course['name']>('', Validators.required),
    category: new FormControl<Course['category']>('', Validators.required),
  });
  matcher = new MyErrorStateMatcher();
  isLoading: boolean = false;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private coursesService: CoursesService,
    private _snackbar: MatSnackBar,
    private _router: Router,
    private _location: Location
  ) {
    // this.form = this.formBuilder.group({
    //   name: new FormControl<Course['name']>('', Validators.required),
    //   category: new FormControl<Course['category']>('', Validators.required),
    // });
  }

  ngOnInit(): void {}

  get formControls() {
    return this.form.controls;
  }

  onSubmit = () => {
    this.isLoading = true;

    if (this.form.valid) {
      this.coursesService.create(this.form.value).subscribe(
        (data) => {
          setTimeout(this.onSuccess, 2000);
          console.log(data);
        },
        (error) => {
          setTimeout(this.onError, 2000);
          console.log(error);
        }
      );
    }
  };

  private onLoading = () => {
    this.isLoading = true;
    // this._router.navigate(['/courses']);
    this._location.back();
  };

  private onError = () => {
    this.isLoading = false;
    this._snackbar.open('Erro ao salvar curso', 'Fechar', {
      horizontalPosition: 'left',
      duration: 2000,
    });
  };

  private onSuccess = () => {
    this.isLoading = true;
    this._snackbar.open('Curso salvo com sucesso', 'Fechar', {
      horizontalPosition: 'left',
      duration: 4000,
    });
    this.onCancel();
  };

  onCancel = () => {
    this._location.back();
  };
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
