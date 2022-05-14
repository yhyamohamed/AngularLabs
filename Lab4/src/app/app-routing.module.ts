import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'departments',redirectTo:'departments',pathMatch:'full'},
  // / /dep
  {path:'departments',component:DepartmentListComponent},
  {path:'departments/add',component:DepartmentAddComponent},
  // /about-us
  {path:'about-us',component:AboutUsComponent},
  // /contact-us
  {path:'contact-us',component:ContactUsComponent},
  // not found
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
