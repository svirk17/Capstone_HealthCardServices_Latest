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
    personalNumber: '',
    familyNumber: '',
    address: ''
  }

  constructor(public service: UserService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  OnSubmit(form:NgForm)
  {
      this.service.UnlinkAccount(form.value).subscribe(     
           
      (res:any) =>{   
        
          this.toastr.success('Your account has been successfully linked.');
      },
      
      (err:any) =>{
        
        this.toastr.error('Oops! There was an error. Please try again.');
      }
      
      )
}

}
