import { Course } from './../../model/course';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  @Input() courses: Course[] = [];
  @Output() addCourse = new EventEmitter(false);
  readonly displayedColumns: string[] = ['id', 'name', 'category', 'actions'];

  constructor() {}

  ngOnInit(): void {}

  onAdd = () => {
    this.addCourse.emit(true);
  };
}
