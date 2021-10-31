import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor() { }

  requestNewHealthCardButtonVisible = true;
  updateAccountInfoButtonVisible = true;
  linkAccountButtonVisible = true;
  previousUserButtonVisible = false;
  firstTimeUserButtonVisible = false;
  firstTimeUserFormVisible = false;
  previousUserFormVisible = false;
  cancelCardButtonVisible = true;
  cancelCardFormVisible = false;
  updateAccountInfoFormVisible = false;

  ngOnInit(): void {
  }

  requestNewHealthCard()
  {
    this.requestNewHealthCardButtonVisible = false;
    this.updateAccountInfoButtonVisible = false;
    this.linkAccountButtonVisible = false;
    this.previousUserButtonVisible = true;
    this.firstTimeUserButtonVisible = true;
    this.firstTimeUserFormVisible = false;
    this.previousUserFormVisible = false;
    this.cancelCardButtonVisible = false;
    this.cancelCardFormVisible = false;
    this.updateAccountInfoFormVisible = false;
  }

  updateAccountInfo() 
  {
    this.requestNewHealthCardButtonVisible = false;
    this.updateAccountInfoButtonVisible = false;
    this.linkAccountButtonVisible = false;
    this.previousUserButtonVisible = false;
    this.firstTimeUserButtonVisible = false;
    this.firstTimeUserFormVisible = false;
    this.previousUserFormVisible = false;
    this.cancelCardButtonVisible = false;
    this.cancelCardFormVisible = false;
    this.updateAccountInfoFormVisible = true;
  }

  linkAccount()
  {
    
  }

  previousUser()
  {
    this.requestNewHealthCardButtonVisible = false;
    this.updateAccountInfoButtonVisible = false;
    this.linkAccountButtonVisible = false;
    this.previousUserButtonVisible = false;
    this.firstTimeUserButtonVisible = false;
    this.firstTimeUserFormVisible = false;
    this.previousUserFormVisible = true;
    this.cancelCardButtonVisible = false;
    this.cancelCardFormVisible = false;
    this.updateAccountInfoFormVisible = false;
  }

  firstTimeUser()
  {
    this.requestNewHealthCardButtonVisible = false;
    this.updateAccountInfoButtonVisible = false;
    this.linkAccountButtonVisible = false;
    this.previousUserButtonVisible = false;
    this.firstTimeUserButtonVisible = false;
    this.firstTimeUserFormVisible = true;
    this.previousUserFormVisible = false;
    this.cancelCardButtonVisible = false;
    this.cancelCardFormVisible = false;
    this.updateAccountInfoFormVisible = false;
  }

  cancelCard()
  {
    this.requestNewHealthCardButtonVisible = false;
    this.updateAccountInfoButtonVisible = false;
    this.linkAccountButtonVisible = false;
    this.previousUserButtonVisible = false;
    this.firstTimeUserButtonVisible = false;
    this.firstTimeUserFormVisible = false;
    this.previousUserFormVisible = false;
    this.cancelCardButtonVisible = false;
    this.cancelCardFormVisible = true;
    this.updateAccountInfoFormVisible = false;
  }

}
