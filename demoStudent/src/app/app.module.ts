import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './component/student/list/list.component';
import {HttpClientModule} from '@angular/common/http';
import { AddComponent } from './component/student/add/add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteComponent } from './component/student/delete/delete.component';
import { EditComponent } from './component/student/edit/edit.component';
import { CustomerListComponent } from './component/customer/customer-list/customer-list.component';
import { CreateCustomerComponent } from './component/customer/create-customer/create-customer.component';
import { CustomerDeleteComponent } from './component/customer/customer-delete/customer-delete.component';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    DeleteComponent,
    EditComponent,
    CustomerListComponent,
    CreateCustomerComponent,
    CustomerDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
