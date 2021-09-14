import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 private httpUrl = 'http://localhost:3000/students';
  constructor(private http: HttpClient) {
  }
  // @ts-ignore
  getAll(): Observable<IStudent> {
    // @ts-ignore
    return this.http.get<IStudent>(this.httpUrl);
  }
  // @ts-ignore
  add(student: IStudent): Observable<IStudent> {
    return this.http.post(this.httpUrl, student);
  }
  // @ts-ignore
  search(nameSearch: string, className: string): Observable<IStudent> {
    return this.http.get(this.httpUrl + '?name_like=' + nameSearch + '&studentClass.className_like=' + className);
  }
  // @ts-ignore
  delete(id: number): Observable<IStudent> {
    return this.http.delete(this.httpUrl + '/' + id);
  }
  // @ts-ignore
  findById(id: string): Observable<IStudent> {
    return this.http.get(this.httpUrl + '/' + id);
  }
}
