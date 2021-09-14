import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {StudentService} from '../../../services/student.service';
import {CustomerService} from '../../../services/customer.service';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
  id: number;
  name: string;
  constructor(public dialog: MatDialogRef<CustomerDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public customerService: CustomerService) { }

  ngOnInit(): void {
    this.id = this.data.customerId;
    this.name = this.data.customerName;
  }

  delete() {
    this.customerService.delete(this.id).subscribe(() => {
      this.dialog.close();
    });
  }

  close() {
    this.dialog.close();
  }
}
