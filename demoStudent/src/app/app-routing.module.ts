import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './component/student/list/list.component';
import {AddComponent} from './component/student/add/add.component';
import {EditComponent} from './component/student/edit/edit.component';
import {CustomerListComponent} from './component/customer/customer-list/customer-list.component';
import {CreateCustomerComponent} from './component/customer/create-customer/create-customer.component';


const routes: Routes = [
  {path : 'student-list', component: ListComponent},
  {path : '', component: CustomerListComponent},
  {path : 'student-add', component: AddComponent},
  {path : 'student-edit/:id', component: EditComponent},
  {path : 'customer-list', component: CustomerListComponent},
  {path : 'customer-create', component: CreateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
