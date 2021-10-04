import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  title: string = 'Health Card Services';
  constructor() { }
  displayLogin = false;
  displayCreateForm = false;

  ngOnInit(): void {
  }

  toggleLogin()
  {
    console.log('Toggle Login');
    this.displayLogin = true;
    this.displayCreateForm = false;
  }

  toggleCreateNewAccount()
  {
    console.log('Toggle Create New Account');
    this.displayCreateForm = true;
    this.displayLogin = false;
  }

}
