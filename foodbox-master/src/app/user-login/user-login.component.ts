import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { UserLogin } from './userlogin';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private router: Router,private proservice:SearchService){
  }

  userlog = new UserLogin();
  
  Gotopage(userForm : NgForm)
  {
    if(this.userlog.emailId == this.proservice.mail && this.userlog.password == this.proservice.getpwd()){
      if(window.confirm("Let's start Shopping..")){
        this.router.navigate(['/product']);
      }
      else{
        userForm.reset();
        console.log(this.proservice.mail);
        console.log(this.proservice.getpwd());
      }
      
    }
    else{
      userForm.reset();
      alert("Invalid EmailId or Password");

    }
  }
  save(userForm : NgForm){
  }
}