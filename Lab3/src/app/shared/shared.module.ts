import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RateComponent } from './rate/rate.component';
import {RatingModule} from 'primeng/rating';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    RateComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    ButtonModule,
    FormsModule
  ],
  exports:[RateComponent]
})
export class SharedModule { }
