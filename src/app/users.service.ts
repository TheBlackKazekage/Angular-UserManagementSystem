import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Account, IUser, User} from './common/interfaces';

@Injectable()
export class UserService {

  private baseUrl = 'https://reqres.in';  // URL to web api
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  registerUser(account: Account) {
    return this.http.post(this.baseUrl + '/api/register', account, this.httpOptions)
      .pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }
  loginUser(account: Account) {
    return this.http.post(this.baseUrl + '/api/login', account, this.httpOptions)
      .pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }
  getUsers() {
    return this.http.get(this.baseUrl + '/api/users?page=2')
      .pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }
  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(this.baseUrl + '/api/users/' + id)
      .pipe(
        catchError(this.handleError)
      );
  }
  createUser(user: User) {
    return this.http.post(this.baseUrl + '/api/users', user, this.httpOptions)
      .pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }
  updateUser(user: User) {
    return this.http.put(this.baseUrl + '/api/users', user, this.httpOptions)
      .pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }
  deleteUser(user: User) {
    return this.http.delete(this.baseUrl + '/api/users' + user.id , this.httpOptions)
      .pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }
  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Node.js server error');
  }
}
