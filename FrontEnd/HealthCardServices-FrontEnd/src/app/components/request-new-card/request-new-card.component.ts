import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-request-new-card',
  templateUrl: './request-new-card.component.html',
  styleUrls: ['./request-new-card.component.css']
})
export class RequestNewCardComponent implements OnInit {

  formModel = {
    UserName: '',
    Id: '',
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
      
      this.service.firstRegistration(form.value).subscribe(     
             
      (res:any) =>{   
        
          this.toastr.success('A request for your health card has been successfully received');
      },
      
      err =>{
        
        this.toastr.error('Oops! There was an error. Please try again.');
      }
      
      )
}

}
