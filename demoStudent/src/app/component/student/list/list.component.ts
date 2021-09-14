import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../../services/student.service';
import {StudentClassService} from '../../../services/student-class.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DeleteComponent} from '../delete/delete.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // @ts-ignore
  listStudent: Array<IStudent> = [];
  searchName = '';
  // @ts-ignore
  searchClass = '';
  // @ts-ignore
  classList: IStudent;
  constructor(public studentService: StudentService,
              public studentClassService: StudentClassService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.studentService.getAll().subscribe(data => {
      this.listStudent = data;
      console.log(data);
    });
    this.studentClassService.getAll().subscribe(data => {
      this.classList = data;
      console.log(data);
    });
  }

  search() {
    this.studentService.search(this.searchName, this.searchClass).subscribe(data => {
      this.listStudent = data;
    });
  }
  openDialogDelete(id: number, name: string) {
      const dialog = this.dialog.open(DeleteComponent,
        {width: '300px',
                height: '150px',
                data: { studentID: id, studentName: name}
               }
        );
      dialog.afterClosed().subscribe(() => {
        this.ngOnInit();
      });
  }
}
