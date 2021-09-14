import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerTypeService} from '../../../services/customer-type.service';
import {CustomerService} from '../../../services/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup;
  // @ts-ignore
  customerTypeList: Array<ICustomerType> = [];
  constructor(private customerTypeService: CustomerTypeService,
              private customerService: CustomerService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(data => {
      this.customerTypeList = data;
    });
    this.customerForm = new FormGroup({
      name: new FormControl(''),
      birthDay: new FormControl(''),
      customerType: new FormControl('')
    });
  }

  add() {
    this.customerService.add(this.customerForm.value).subscribe(() => {
      console.log('add thành công');
      this.route.navigateByUrl('customer-list');
    });
  }
}
