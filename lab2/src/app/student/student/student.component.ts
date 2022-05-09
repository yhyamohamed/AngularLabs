import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  students: Student[] = [
    new Student(1, 'yaya', 30, 1),
    new Student(2, 'jhon doe', 26, 2),
    new Student(3, 'jhon not doe', 25, 3),
    new Student(4, 'jhon wick', 30, 1),
    new Student(5, 'another', 24, 1),
  ];
  stdToAdd: Student = new Student(0, '', 0, 0);
  stdToEdit: Student = new Student(0, '', 0, 0);
  haveStdToEdit: boolean = false;
  oprationDone: boolean = false;
  operation="";
  indexToOperate = -1;
  constructor() {}

  public addStd() {
    if (this.stdToAdd.id == 0) return;
    this.students.push(this.stdToAdd);
    this.stdToAdd = new Student(0, '', 0, 0);
  }
  public editStd(id: number) {
    this.haveStdToEdit = this.haveStdToEdit ? false : true;
    this.indexToOperate = this.students.findIndex((std) => std.id == id);
    if (this.indexToOperate <= -1) return;
    this.stdToEdit = this.students[this.indexToOperate];

  }
  public doneEditing() {
    if (this.indexToOperate <= -1 || this.stdToEdit.id == 0) return;
    this.students.splice(this.indexToOperate, 1, this.stdToEdit);
    this.oprationDone = true;
    this.operation = "Edited"
    this.stdToEdit = new Student(0, '', 0, 0);
    this.indexToOperate=-1;
    this.haveStdToEdit = false;  
  }
  public deleteStd(id: number) {
    this.indexToOperate = this.students.findIndex((std) => std.id == id);
    if (this.indexToOperate <= -1) return;
    this.students.splice(this.indexToOperate, 1);
     this.oprationDone = true;
    this.operation = "Deleted"
  }

  ngOnInit(): void {}
}
