import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  formModel = {
    personalNumber: '',
    familyNumber: '',
    address: '',
    familyNumber2: ''
  }

 
  
  constructor(public service: UserService, private toastr:ToastrService) { 
    OtherPersonNumber: 0;
  }

  ngOnInit(): void {
  }

  OnSubmit(form:NgForm)
  {
      OtherPersonNumber: this.formModel.familyNumber2;
      this.service.linkAccount(form.value, this.formModel.familyNumber2).subscribe(     
           
      (res:any) =>{   
        
          this.toastr.success('Your account has been successfully linked.');
      },
      
      (err:any) =>{
        
        this.toastr.error('Oops! There was an error. Please try again.');
      }
      
      )
}

}
