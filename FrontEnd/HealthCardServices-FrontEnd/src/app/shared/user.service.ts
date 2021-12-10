import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL = 'http://localhost:44309/api';

  constructor(private fb:FormBuilder, private http:HttpClient, private toastr:ToastrService) { }

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
    }, {validator : this.comparePasswords}),
    Id :['', Validators.required],
    FamilyHealthNumber :['', Validators.required]
  });

  familyNumber4Recommendation = '';

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

    return this.http.post(this.baseURL + '/ApplicationUser/Register', body);
  }

  createChildAccount(formData: any)
  {
    return this.http.post(this.baseURL + '/ApplicationUser/Register', formData);
  }

  login(formData: any)
  {
    return this.http.post(this.baseURL + '/ApplicationUser/Login', formData);
    console.log(formData);
  }

  SendEmail(formData: any)
  {
    return this.http.post(this.baseURL + '/ApplicationUser/SendEmail', formData);
    console.log(formData);
  }

  renewPreviousCard(formData: any)
  {
    return this.http.post(this.baseURL + '/ApplicationUser/RenewPreviousCard', formData);
    console.log(formData);
  }

  cancelCard(formData: any)
  {
    return this.http.post(this.baseURL + '/ApplicationUser/CancelCard', formData);
    console.log(formData);
  }

  updateAccountInfo(formData: any)
  {
    console.log(formData);
    this.familyNumber4Recommendation = formData.familyNumber;
    return this.http.post(this.baseURL + '/ApplicationUser/UpdateAccountInfo', formData);    
  }

  firstRegistration(formData: any)
  {
    console.log(formData);
    return this.http.post(this.baseURL + '/ApplicationUser/FirstRegistration', formData);
    
  }

  linkAccount(formData: any)
  {
    console.log(formData);
    return this.http.post(this.baseURL + '/ApplicationUser/LinkAccount', formData);    
  }

  UnlinkAccount(formData: any)
  {
    console.log(formData);
    return this.http.post(this.baseURL + '/ApplicationUser/UnlinkAccount', formData);    
  }


  getRecommendation()
  {
    return this.http.post(this.baseURL + '/ApplicationUser/GetRecommendation', this.familyNumber4Recommendation);
  }

}
