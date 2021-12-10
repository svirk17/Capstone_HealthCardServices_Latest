import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formModel = {
    UserName: '',
    Password: ''
  }

  successfulLogin = false;
  displayLoginForm = true;

  constructor(public service: UserService, private router: Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  OnSubmit(form:NgForm)
  {
    this.service.login(form.value).subscribe(
      (res:any)=>{
        localStorage.setItem('token', res.token);
        //this.router.navigateByUrl('user');  
        this.successfulLogin = true;   
        this.displayLoginForm = false;

        /*
        //Send email to user
        this.service.SendEmail(form.value).subscribe(
          (res:any)=>{
             console.log("Email sent successfully");
           },
           err => {
             console.log(err);
           }
         )
         */
      },
      err => {
        if (err.status == 400)
        this.toastr.error('Incorrect username or password.', 'Authentication Failed');
        else
        console.log(err);
        //this.router.navigateByUrl('user'); 
      }
    )
  }

}
