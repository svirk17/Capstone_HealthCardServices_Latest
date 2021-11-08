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
  linkAccountRequestButtonVisible = true;
  previousUserButtonVisible = false;
  firstTimeUserButtonVisible = false;
  firstTimeUserFormVisible = false;
  previousUserFormVisible = false;
  cancelCardButtonVisible = true;
  cancelCardFormVisible = false;
  updateAccountInfoFormVisible = false;
  linkingRequestFormVisible = false;
  linkAccountFormVisible = false;
  unlinkAccountFormVisible = false;

  ngOnInit(): void {
  }

  requestNewHealthCard()
  {
    this.requestNewHealthCardButtonVisible = false;
    this.updateAccountInfoButtonVisible = false;
    this.linkAccountRequestButtonVisible = false;
    this.previousUserButtonVisible = true;
    this.firstTimeUserButtonVisible = true;
    this.firstTimeUserFormVisible = false;
    this.previousUserFormVisible = false;
    this.cancelCardButtonVisible = false;
    this.cancelCardFormVisible = false;
    this.updateAccountInfoFormVisible = false;
    this.linkAccountFormVisible = false;
    this.unlinkAccountFormVisible = false;
    this.linkingRequestFormVisible = false;
  }

  updateAccountInfo() 
  {
    this.requestNewHealthCardButtonVisible = false;
    this.updateAccountInfoButtonVisible = false;
    this.linkAccountRequestButtonVisible = false;
    this.previousUserButtonVisible = false;
    this.firstTimeUserButtonVisible = false;
    this.firstTimeUserFormVisible = false;
    this.previousUserFormVisible = false;
    this.cancelCardButtonVisible = false;
    this.cancelCardFormVisible = false;
    this.updateAccountInfoFormVisible = true;
    this.linkAccountFormVisible = false;
    this.unlinkAccountFormVisible = false;
    this.linkingRequestFormVisible = false;
  }

  linkUnlinkRequest()
  {
    this.requestNewHealthCardButtonVisible = false;
    this.updateAccountInfoButtonVisible = false;
    this.linkAccountRequestButtonVisible = false;
    this.previousUserButtonVisible = false;
    this.firstTimeUserButtonVisible = false;
    this.firstTimeUserFormVisible = false;
    this.previousUserFormVisible = false;
    this.cancelCardButtonVisible = false;
    this.cancelCardFormVisible = false;
    this.updateAccountInfoFormVisible = false;
    this.linkAccountFormVisible = false;
    this.unlinkAccountFormVisible = false;
    this.linkingRequestFormVisible = true;
  }

  linkAccount()
  {
    this.requestNewHealthCardButtonVisible = false;
    this.updateAccountInfoButtonVisible = false;
    this.linkAccountRequestButtonVisible = false;
    this.previousUserButtonVisible = false;
    this.firstTimeUserButtonVisible = false;
    this.firstTimeUserFormVisible = false;
    this.previousUserFormVisible = false;
    this.cancelCardButtonVisible = false;
    this.cancelCardFormVisible = false;
    this.updateAccountInfoFormVisible = false;
    this.linkAccountFormVisible = true;
    this.unlinkAccountFormVisible = false;
    this.linkingRequestFormVisible = false;
  }

  unLinkAccount()
  {
    this.requestNewHealthCardButtonVisible = false;
    this.updateAccountInfoButtonVisible = false;
    this.linkAccountRequestButtonVisible = false;
    this.previousUserButtonVisible = false;
    this.firstTimeUserButtonVisible = false;
    this.firstTimeUserFormVisible = false;
    this.previousUserFormVisible = false;
    this.cancelCardButtonVisible = false;
    this.cancelCardFormVisible = false;
    this.updateAccountInfoFormVisible = false;
    this.linkAccountFormVisible = false;
    this.unlinkAccountFormVisible = true;
    this.linkingRequestFormVisible = false;
  }

  previousUser()
  {
    this.requestNewHealthCardButtonVisible = false;
    this.updateAccountInfoButtonVisible = false;
    this.linkAccountRequestButtonVisible = false;
    this.previousUserButtonVisible = false;
    this.firstTimeUserButtonVisible = false;
    this.firstTimeUserFormVisible = false;
    this.previousUserFormVisible = true;
    this.cancelCardButtonVisible = false;
    this.cancelCardFormVisible = false;
    this.updateAccountInfoFormVisible = false;
    this.linkAccountFormVisible = false;
    this.unlinkAccountFormVisible = false;
    this.linkingRequestFormVisible = false;
  }

  firstTimeUser()
  {
    this.requestNewHealthCardButtonVisible = false;
    this.updateAccountInfoButtonVisible = false;
    this.linkAccountRequestButtonVisible = false;
    this.previousUserButtonVisible = false;
    this.firstTimeUserButtonVisible = false;
    this.firstTimeUserFormVisible = true;
    this.previousUserFormVisible = false;
    this.cancelCardButtonVisible = false;
    this.cancelCardFormVisible = false;
    this.updateAccountInfoFormVisible = false;
    this.linkAccountFormVisible = false;
    this.unlinkAccountFormVisible = false;
    this.linkingRequestFormVisible = false;
  }

  cancelCard()
  {
    this.requestNewHealthCardButtonVisible = false;
    this.updateAccountInfoButtonVisible = false;
    this.linkAccountRequestButtonVisible = false;
    this.previousUserButtonVisible = false;
    this.firstTimeUserButtonVisible = false;
    this.firstTimeUserFormVisible = false;
    this.previousUserFormVisible = false;
    this.cancelCardButtonVisible = false;
    this.cancelCardFormVisible = true;
    this.updateAccountInfoFormVisible = false;
    this.linkAccountFormVisible = false;
    this.unlinkAccountFormVisible = false;
    this.linkingRequestFormVisible = false;
  }

  back()
  {
    this.requestNewHealthCardButtonVisible = true;
    this.updateAccountInfoButtonVisible = true;
    this.linkAccountRequestButtonVisible = true;
    this.previousUserButtonVisible = false;
    this.firstTimeUserButtonVisible = false;
    this.firstTimeUserFormVisible = false;
    this.previousUserFormVisible = false;
    this.cancelCardButtonVisible = true;
    this.cancelCardFormVisible = false;
    this.updateAccountInfoFormVisible = false;
    this.linkAccountFormVisible = false;
    this.unlinkAccountFormVisible = false;
    this.linkingRequestFormVisible = false;
  }

}
