import {inject, Injectable} from '@angular/core';
import { LoginRequest } from './login.request';
import { catchError, Observable, throwError, BehaviorSubject, tap } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'

})
export class LoginService {
  
  currentUserLoggedOn : BehaviorSubject<boolean>= new BehaviorSubject<boolean>(false);
  currentUserData     : BehaviorSubject<User>   = new BehaviorSubject<User>({id:1, email:''})

  constructor(private http: HttpClient) { }
  login(credentials:LoginRequest): Observable<User>{
    console.log(credentials);
    return this.http.get<User>('/assets/data.json').pipe(
      tap( userData => {
        this.currentUserData.next(userData);
        this.currentUserLoggedOn.next(true);
      }),
      catchError(this.handleError)    );
  }

  private handleError(error:HttpErrorResponse){
    if(error.status == 0){
      console.error('there has been an error',error.error);
    }else{
      console.error('Backend returned status code', error.status,error.error);    
  }
    return throwError(()=> new Error('Something went wrong, please try again later'));

  }

  get userData(): Observable<User>{
    return this.currentUserData.asObservable();
  }
  get userLoggedOn(): Observable<boolean>{
    return this.currentUserLoggedOn.asObservable();
  }

}
