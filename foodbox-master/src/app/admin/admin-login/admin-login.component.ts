import { Component, getModuleFactory, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from 'src/app/search.service';
import { adminLogin } from './adminlogin';
import { RouterModule, Route, Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  
  
  adlogin = new adminLogin();

  constructor(private router: Router){
  }

  ngOnInit(): void {
  }
  Gotopage(userForm : NgForm)
  {
    if(this.adlogin.emailId == "admin@gmail.com" && this.adlogin.password == "kitchenadmin"){
      if(window.confirm("Do you want to visit Admin Page?")){
        this.router.navigate(['/admin-page']);
      }
      else{
        userForm.reset();
        console.log(this.adlogin.password);
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