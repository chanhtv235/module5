import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  httpUrl = 'http://localhost:3000/customers';
  constructor(private http: HttpClient) {
  }
  // @ts-ignore
  getAll(): Observable<ICustomer> {
    // @ts-ignore
    return this.http.get<ICustomer>(this.httpUrl);
  }
  // @ts-ignore
  add(customer: ICustomer): Observable<ICustomer> {
    // @ts-ignore
    return this.http.post<ICustomer>(this.httpUrl, customer);
  }
  // @ts-ignore
  search(nameSearch: string, customerTypeName: string): Observable<IStudent> {
    return this.http.get(this.httpUrl + '?name_like=' + nameSearch + '&customerType.customerTypeName_like=' + customerTypeName);
  }
  // @ts-ignore
  delete(id: number): Observable<ICustomer> {
    // @ts-ignore
    return this.http.delete<ICustomer>(this.httpUrl + '/' + id);
  }
  // @ts-ignore
  findById(id: string): Observable<ICustomer> {
    // @ts-ignore
    return this.http.get<ICustomer>(this.httpUrl + '/' + id);
  }
}
