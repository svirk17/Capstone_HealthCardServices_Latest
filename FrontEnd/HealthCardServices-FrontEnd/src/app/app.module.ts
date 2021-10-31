import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { LoginComponent } from './components/login/login.component';
import { CreateNewAccountComponent } from './components/create-new-account/create-new-account.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './shared/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { RequestNewCardComponent } from './components/request-new-card/request-new-card.component';
import { RenewPreviousHealthCardComponent } from './components/renew-previous-health-card/renew-previous-health-card.component';

import { CancelHealthCardComponent } from './components/cancel-health-card/cancel-health-card.component';
import { UpdateAccountInfoComponent } from './components/update-account-info/update-account-info.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonsComponent,
    LoginComponent,
    CreateNewAccountComponent,
    UserHomeComponent,
    RequestNewCardComponent,
    RenewPreviousHealthCardComponent,
    CancelHealthCardComponent,
    UpdateAccountInfoComponent,      
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
