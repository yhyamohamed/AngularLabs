import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department.model';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
  // providers:[DepartmentService]
})
export class DepartmentListComponent implements OnInit {
  allDept: Department[] = [];

  constructor(public deptServ: DepartmentService) {}

  ngOnInit(): void {
    this.allDept = this.deptServ.getAllDepartmets()
  }
}
