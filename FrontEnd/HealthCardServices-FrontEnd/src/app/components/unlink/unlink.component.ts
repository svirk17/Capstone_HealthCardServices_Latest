import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-unlink',
  templateUrl: './unlink.component.html',
  styleUrls: ['./unlink.component.css']
})
export class UnlinkComponent implements OnInit {

  formModel = {
    Id: '',
    familyNumber: '',
    address: '',
    personalNumber: ''
  }

  constructor(public service: UserService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  OnSubmit(form:NgForm)
  {
      this.service.UnlinkAccount(form.value).subscribe(     
           
      (res:any) =>{   
        
          this.toastr.success('Your account has been successfully unlinked. An email with additional details has been sent to you.');
      },
      
      (err:any) =>{
        
        this.toastr.error('Oops! There was an error. Please try again.');
      }
      
      )
}

}
