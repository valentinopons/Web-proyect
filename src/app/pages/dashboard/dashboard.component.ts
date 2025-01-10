import { Component } from '@angular/core';
import { User } from '../../services/auth/user';
import { LoginService } from '../../services/auth/login.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    userLoginOn:boolean = false;
    userData?:User;
    
    constructor(private loginService:LoginService){}

    initSuscription(): void {
      this.loginService.currentUserLoggedOn.subscribe({
        next:(userLoginOn)=> {
          this.userLoginOn = userLoginOn;
          
        }
      });
        this.loginService.currentUserData.subscribe({
          next:(userData)=>{
            this.userData = userData;
          }
        })
    
    }
}
