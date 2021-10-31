import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-account-info',
  templateUrl: './update-account-info.component.html',
  styleUrls: ['./update-account-info.component.css']
})
export class UpdateAccountInfoComponent implements OnInit {

  formModel = {
    personalNumber: '',
    familyNumber: '',
    address: '',
    Email: '',
    PhoneNumber: ''
  }

  constructor(public service: UserService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  OnSubmit(form:NgForm)
  {
      this.service.updateAccountInfo(form.value).subscribe(     
           
      (res:any) =>{   
        
          this.toastr.success('Your account information has been updated.');
      },
      
      err =>{
        
        this.toastr.error('Oops! There was an error. Please try again.');
      }
      
      )
}


}
