import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.css']
})
export class CreateNewAccountComponent implements OnInit {

  constructor(public service: UserService) { }

  ngOnInit(): void {
  }

  OnSubmit()
  {
    this.service.createAccount().subscribe(
      (res:any) =>{
        if(res.succeded){
          this.service.formModel.reset();
        }
      },
      err =>{
        console.log(err);
      }
    )
  }

}
