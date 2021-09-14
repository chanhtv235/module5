import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {StudentService} from '../../../services/student.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id: number;
  studentName = '';
  constructor( public dialog: MatDialogRef<DeleteComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any,
               public studentService: StudentService
               ) {
  }

  ngOnInit(): void {
    this.id = this.data.studentID;
    this.studentName = this.data.studentName;
  }

  delete() {
   this.studentService.delete(this.id).subscribe( () => {
     this.dialog.close();
   });
  }

  close() {
    this.dialog.close();
  }
}
