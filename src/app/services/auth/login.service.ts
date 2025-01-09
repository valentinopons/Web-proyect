import {inject, Injectable} from '@angular/core';
import { LoginRequest } from './login.request';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private http  = inject(HttpClient);
  //constructor(private http: HttpClient) { }
  login(credentials:LoginRequest){
    this.http.get("././assets/data.json")
  }

}
