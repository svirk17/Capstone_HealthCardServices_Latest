import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cancel-health-card',
  templateUrl: './cancel-health-card.component.html',
  styleUrls: ['./cancel-health-card.component.css']
})
export class CancelHealthCardComponent implements OnInit {

  formModel = {
    Id: '',
    familyNumber: ''
  }

  constructor(public service: UserService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  OnSubmit(form:NgForm)
  {
      this.service.cancelCard(form.value).subscribe(     
           
      (res:any) =>{   
        
          this.toastr.success('Your card is now invalid/inactive for use. A confirmation email has been sent to you.');
      },
      err =>{
        
        this.toastr.error('Oops! There was an error. Please try again.');
      }
      
      )
}

}
