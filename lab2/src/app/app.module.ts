import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftMenueComponent } from './left-menue/left-menue.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { StudentModule } from './student/student.module';
import { DepartmentModule } from './department/department.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftMenueComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,StudentModule,DepartmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
