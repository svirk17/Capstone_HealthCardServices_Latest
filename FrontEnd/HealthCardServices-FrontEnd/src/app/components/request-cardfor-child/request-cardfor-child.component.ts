import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-request-cardfor-child',
  templateUrl: './request-cardfor-child.component.html',
  styleUrls: ['./request-cardfor-child.component.css']
})
export class RequestCardforChildComponent implements OnInit {

  formModel = {
    firstName: '',
    lastName: '',
    familyNumber: '',
    address: '',
    userName: '',
    password:''
  }

  constructor(public service: UserService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  OnSubmit(form:NgForm)
  {
      
      this.service.createChildAccount(form.value).subscribe(     
           
      (res:any) =>{   
        
          this.toastr.success('Your childs account information has been added. An email with additional details has been sent.');
      }
      
      )

      this.toastr.success('Your childs account information has been added. An email with additional details has been sent.');
      this.service.formModel.reset();
}

}

