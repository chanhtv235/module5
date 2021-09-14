import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  private httpUrl = 'http://localhost:3000/customerTypes';
  constructor(private http: HttpClient) {
  }
  // @ts-ignore
  getAll(): Observable<ICustomerType> {
    // @ts-ignore
    return this.http.get<ICustomerType>(this.httpUrl);
  }
  // @ts-ignore
  findById(id: string): Observable<ICustomerType> {
    // @ts-ignore
    return this.http.get<ICustomerType>(this.httpUrl + '/' + id);
  }
}
