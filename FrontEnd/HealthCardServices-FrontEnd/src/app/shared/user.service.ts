import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL = 'http://localhost:44309/api';

  constructor(private fb:FormBuilder, private http:HttpClient) { }

  formModel = this.fb.group({
    UserName :['', Validators.required],
    FirstName :['', Validators.required],
    LastName :['', Validators.required],
    Address :['', Validators.required],
    Phone :['', Validators.required],
    Email :['',[Validators.required, Validators.email]],
    DateOfBirth :['',Validators.required],
    Passwords : this.fb.group({
      Password :['',[Validators.required, Validators.minLength(6)]],
      ConfirmPassword :['',[Validators.required, Validators.minLength(6)]]
    }, {validator : this.comparePasswords})
  });

  comparePasswords(fb:FormGroup)
  {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');

    if(confirmPswrdCtrl?.errors == null|| 'passwordMismatch' in confirmPswrdCtrl.errors)
    {
      if(fb.get('Password')?.value != confirmPswrdCtrl?.value)
      {
        confirmPswrdCtrl?.setErrors({passwordMismatch:true});
      }
      else
      {
        confirmPswrdCtrl?.setErrors(null);
      }
    }
  }

  //Submit the information received in the create form to the database
  createAccount()
  {
    var body = {
      UserName: this.formModel.value.UserName,
      FirstName: this.formModel.value.FirstName,
      LastName: this.formModel.value.LastName,
      Address: this.formModel.value.Address,
      PhoneNumber: this.formModel.value.PhoneNumber,
      Email: this.formModel.value.Email,
      DateOfBirth: this.formModel.value.DateOfBirth,
      Password: this.formModel.value.Passwords.Password
    }

    return this.http.post(this.baseURL + '/ApplicationUser/Register/', body);
  }
}
