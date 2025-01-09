import {inject, Injectable} from '@angular/core';
import { LoginRequest } from './login.request';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private http  = inject(HttpClient);
  //constructor(private http: HttpClient) { }
  login(credentials:LoginRequest):Observable<any>{
    return this.http.get("././assets/data.json");
  }

}
