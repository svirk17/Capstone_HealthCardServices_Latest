import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.css']
})
export class CreateNewAccountComponent implements OnInit {

  showForm = true;
  showHeaderPage = false;
  constructor(public service: UserService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  OnSubmit()
  {
    this.service.createAccount().subscribe(
      (res:any) =>{
        if(res.succeded){
          this.toastr.success('Your user account has been successfully created.');
          this.service.formModel.reset();
        }
      },
      err =>{
        console.log(err);
        //this.toastr.error('Oops! There was an error');
      }
    )
  }

  Cancel()
  {
    this.showHeaderPage = true;
    this.showForm = false;
  }

}
