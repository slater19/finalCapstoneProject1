import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from 'src/app/search.service';
import { UserLogin } from 'src/app/user-login/userlogin';
import { adminLogin } from '../admin-login/adminlogin';

import { changePassword } from '../change-password/changepassword';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent  {

  constructor(private proservice:SearchService)
{
}
  user = new UserLogin();
  changepwd = new changePassword();
  adlogin = new adminLogin();

  save(userForm : NgForm){
    
    alert("Password changed Successfully \n Goto User Login..");
    this.proservice.pass = this.adlogin.password;
    
    userForm.reset();
    
    this.proservice.changepwd(this.changepwd.password);
    
  }

}