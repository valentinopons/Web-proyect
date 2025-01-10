import { Injectable } from '@angular/core';
import { LoginRequest } from './login.request';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { user } from './user';

@Injectable({
  providedIn: 'root'

})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(credentials:LoginRequest): Observable<user>{
    console.log(credentials);
    return this.http.get<user>('/assets/dta.json').pipe(
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
  
}
