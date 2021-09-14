import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {StudentService} from '../../../services/student.service';
import {StudentClassService} from '../../../services/student-class.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  studentForm: FormGroup;
  // @ts-ignore
  classList: IClass[] = [];

  // @ts-ignore
  student: IStudent = null;
  // @ts-ignore
  class: IClass = null;

  constructor(private studentService: StudentService,
              private studentClassService: StudentClassService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.studentClassService.getAll().subscribe(data => {
      this.classList = data;
      console.log(data);
    });
    this.studentForm = new FormGroup({
      name: new FormControl(''),
      birthDay: new FormControl(''),
      studentClass: new FormControl()
    });
  }

  add() {
    this.studentService.add(this.studentForm.value).subscribe(() => {
      console.log('add thành công');
      console.log(this.student);
      this.route.navigateByUrl('student-list');
    });
  }
}
