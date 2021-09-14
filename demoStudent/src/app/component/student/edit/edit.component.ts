import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {StudentService} from '../../../services/student.service';
import {StudentClassService} from '../../../services/student-class.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  studentForm = new FormGroup({
    name: new FormControl(),
    birthDay: new FormControl(),
    studentClass: new FormControl()
  });
  // @ts-ignore
  id: string;
  // @ts-ignore
  classList: IClass[] = [];
  // @ts-ignore
  student: IStudent = null;
  // @ts-ignore
  class: IClass = null;

  constructor(private studentService: StudentService,
              private studentClassService: StudentClassService,
              private route: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = param.get('id');
      this.studentService.findById(this.id).subscribe(data => {
        this.student = data;
        this.studentForm.patchValue(this.student);
      });
    });
    this.studentClassService.getAll().subscribe(data => {
      this.classList = data;
      console.log(data);
    });

  }
  compare(c1, c2) {
    if (c1 != null && c2 != null) {
      return c1.id === c2.id;
    }
    return false;
  }
  add() {
    this.studentService.add(this.studentForm.value).subscribe(() => {
      console.log('add thành công');
      console.log(this.student);
      this.route.navigateByUrl('student-list');
    });
  }

}
