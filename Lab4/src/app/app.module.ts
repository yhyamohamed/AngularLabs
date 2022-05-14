import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentModule } from './department/department.module';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    ContactUsComponent,
    AboutUsComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, DepartmentModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
