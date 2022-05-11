import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { PowerToXPipe } from './power-to-x.pipe';
import { StringConverterPipe } from './string-converter.pipe';
import { ArraySplicePipe } from './array-splice.pipe';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PowerToXPipe,
    StringConverterPipe,
    ArraySplicePipe,
  ],
  imports: [BrowserModule, ButtonModule, TableModule, InputTextModule,FormsModule,RatingModule,SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
