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

  ngOnInit(): void {
  }

  requestNewHealthCard()
  {
    this.requestNewHealthCardButtonVisible = false;
    this.updateAccountInfoButtonVisible = false;
    this.linkAccountButtonVisible = false;
    this.previousUserButtonVisible = true;
    this.firstTimeUserButtonVisible = true;
  }

  updateAccountInfo() 
  {

  }

  linkAccount()
  {
    
  }

  previousUser()
  {

  }

  firstTimeUser()
  {
    this.requestNewHealthCardButtonVisible = false;
    this.updateAccountInfoButtonVisible = false;
    this.linkAccountButtonVisible = false;
    this.previousUserButtonVisible = false;
    this.firstTimeUserButtonVisible = false;
    this.firstTimeUserFormVisible = true;
  }

}
