import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})



export class AppComponent {

  displayLoginForm = false;
  displayCreateForm = false;
  LoginButtonVisible = true;
  CreateAccountButtonVisible = true;
  showHeader = true;

  

  toggleLogin()
  {
    console.log('Toggle Login');
    this.displayLoginForm = true;
    this.displayCreateForm = false;
    this.LoginButtonVisible = false;
    this.CreateAccountButtonVisible = false;
  }

  toggleCreateNewAccount()
  {
    console.log('Toggle Create New Account');
    this.displayCreateForm = true;
    this.displayLoginForm = false;
    this.LoginButtonVisible = false;
    this.CreateAccountButtonVisible = false;
    this.showHeader = false;
  }
  
}
