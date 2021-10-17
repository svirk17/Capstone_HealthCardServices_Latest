import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNewAccountComponent } from './components/create-new-account/create-new-account.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

const routes: Routes = [
 // {
  //    path: '', component: HeaderComponent, pathMatch: 'full'
  //},


  { 
    path: 'login', component: LoginComponent,
    children: [] 
  },

  { 
    path: 'create-new-account', component: CreateNewAccountComponent,
    children: [] 
  },

  { 
    path: 'user', component: UserHomeComponent,
    children: [] 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }