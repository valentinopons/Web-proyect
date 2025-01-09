import { Component, inject } from '@angular/core';
import {FormBuilder,ReactiveFormsModule, Validators} from '@angular/forms';
import {  } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';
import { LoginRequest } from '../../services/auth/login.request';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private formBuilder  = inject(FormBuilder);
  private router       = inject(Router);
  private loginService = inject(LoginService);
  loginForm = this.formBuilder.group({
  email: ['example@gmail.com', [Validators.email, Validators.required]],
  password: ['',[Validators.required]],});

  loginValidation(){
    if(this.loginForm.valid){
      //this.router.navigateByUrl()
      this.loginService.login(this.loginForm.value as LoginRequest);
      this.loginForm.reset();
    }else{
      alert("Error, invalid credentials")
      this.loginForm.markAllAsTouched();
    }
  }


}
