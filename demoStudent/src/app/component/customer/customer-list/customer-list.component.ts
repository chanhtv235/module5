import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../services/customer.service';
import {CustomerTypeService} from '../../../services/customer-type.service';
import {MatDialog} from '@angular/material/dialog';
import {CustomerDeleteComponent} from '../customer-delete/customer-delete.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  // @ts-ignore
  listCustomer: Array<ICustomer> = [];
  // @ts-ignore
  listCustomerType: Array<ICustomerType> = [];
  searchName = '';
  searchCustomerTypeName = '';

  constructor( private customerService: CustomerService,
               private customerTypeService: CustomerTypeService,
               private dialog: MatDialog) { }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(data => {
      this.listCustomer = data;
      console.log(data);
    });
    this.customerTypeService.getAll().subscribe(data => {
      this.listCustomerType = data;
    });
  }

  search() {
   this.customerService.search(this.searchName, this.searchCustomerTypeName).subscribe(data => {
     this.listCustomer = data;
   });
  }

  openDialogDelete(id: number, name: string) {
    const dialog = this.dialog.open(CustomerDeleteComponent, {
      width: '350px',
      height: '250px',
      data: {customerId: id, customerName: name}
    });
    dialog.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }
}
