import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentClassService {
  private httpUrl = 'http://localhost:3000/studentClass';
  constructor(private http: HttpClient) {
  }
  // @ts-ignore
  getAll(): Observable<IStudent> {
    // @ts-ignore
    return this.http.get<IClass>(this.httpUrl);
  }
}
