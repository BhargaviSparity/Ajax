import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { ShoppingsiteComponent } from './shoppingsite.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AddComponent } from './add.component';
import {FormsModule} from '@angular/forms';
import { ImportantComponent } from './important.component';
import {MyserviceService} from './myservice.service';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ShoppingsiteComponent,
    AddComponent,
    ImportantComponent
  ],
  imports: [
    BrowserModule,CommonModule,HttpClientModule,NgxPaginationModule,FormsModule
  ],
  providers: [MyserviceService],
  bootstrap: [ImportantComponent]
})
export class AppModule { }
