import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-renew-previous-health-card',
  templateUrl: './renew-previous-health-card.component.html',
  styleUrls: ['./renew-previous-health-card.component.css']
})
export class RenewPreviousHealthCardComponent implements OnInit {

  formModel = {
    Id: '',
    familyNumber: ''
  }

  baseURL = 'http://localhost:44309/api';

  constructor(public service: UserService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  OnSubmit(form:NgForm)
  {
      this.service.renewPreviousCard(form.value).subscribe(     
           
      (res:any) =>{   
        
          this.toastr.success('Your user account has been successfully activated. An email with additional details has been sent to you.');
      },
      err =>{
        
        this.toastr.error('Oops! There was an error. Please try again.');
      }
      
      )

            
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
    
    
  }

}
