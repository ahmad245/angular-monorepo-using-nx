import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Authenticate, User } from '../../../../../data-models';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}
  private userSubject$ = new BehaviorSubject<User>(null);
  user$ = this.userSubject$.asObservable();
 
  login(authenticate: Authenticate): Observable<User> {
    console.log(authenticate);
    
    return this.httpClient
      .post<User>('http://localhost:3000/login', authenticate)
      .pipe(tap((user: User) => this.userSubject$.next(user)));
  }

}
