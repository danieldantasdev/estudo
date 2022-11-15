import { Course } from '../../../../core/model/course';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);
  readonly displayedColumns: string[] = ['id', 'name', 'category', 'actions'];

  constructor() {}

  ngOnInit(): void {}

  onAdd = () => {
    this.add.emit(true);
  };

  onEdit = (course: Course) => {
    this.edit.emit(course);
  };

  onDelete = (course: Course) => {
    this.delete.emit(course);
  };
}
