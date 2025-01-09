import { Injectable } from '@angular/core';
import { LoginRequest } from './login.request';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  login(credentials:LoginRequest){
    console.log(credentials);
  }
  
}
