import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { Student } from '../_models/student.model';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StudentComponent],
  imports: [CommonModule,FormsModule],
  exports: [StudentComponent],
})
export class StudentModule {}
