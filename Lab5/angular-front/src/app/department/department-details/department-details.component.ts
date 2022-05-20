import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department.model';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  constructor(private acRoute:ActivatedRoute,private depServ:DepartmentService) { }

deptToShow:Department= new Department(0,"","");
id = -1;
  ngOnInit(): void {
    this.id  = this.acRoute.snapshot.params['id'];
    this.deptToShow = this.depServ.getDepartmanet(this.id);
  }

}
