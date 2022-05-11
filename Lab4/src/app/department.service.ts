import { Injectable } from '@angular/core';
import { Department } from './_models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
private deps:Department[]=[
  new Department(100,"os",'alex'),
  new Department(102,"pd",'alex'),
  new Department(101,"os",'cairo'),
  new Department(103,"os",'aswan'),
  new Department(105,"Ai",'alex'),
];
getAllDepartmets(){return this.deps;}
addDepartment(dept:Department){
  this.deps.push(dept)
}
getDepartmanet(id:number){
  return this.deps.filter(ele => ele.id == id)
}
  constructor() { }
}
