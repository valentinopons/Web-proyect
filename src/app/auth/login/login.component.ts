import { Component, inject } from '@angular/core';
import {FormBuilder,ReactiveFormsModule, Validators} from '@angular/forms';
import {  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private formBuilder = inject(FormBuilder);
  private router      = inject(Router)
  loginForm = this.formBuilder.group({
  email: ['example@gmail.com', [Validators.email, Validators.required]],
  password: ['',[Validators.required]],});

  loginValidation(){
    if(this.loginForm.valid){
      console.log("logged succefully");
      //this.router.navigateByUrl()
      this.loginForm.reset();
    }else{
      alert("Error, invalid credentials")
    }
  }


}
