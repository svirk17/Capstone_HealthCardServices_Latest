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
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './shared/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { RequestNewCardComponent } from './components/request-new-card/request-new-card.component';
import { RenewPreviousHealthCardComponent } from './components/renew-previous-health-card/renew-previous-health-card.component';

import { CancelHealthCardComponent } from './components/cancel-health-card/cancel-health-card.component';
import { UpdateAccountInfoComponent } from './components/update-account-info/update-account-info.component';
import { LinkComponent } from './components/link/link.component';
import { UnlinkComponent } from './components/unlink/unlink.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { OptionButtonsComponent } from './components/option-buttons/option-buttons.component';
import { RequestCardforChildComponent } from './components/request-cardfor-child/request-cardfor-child.component';
import {MatIconModule} from '@angular/material/icon';



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
    LinkComponent,
    UnlinkComponent,
    RecommendationComponent,
    UploadFileComponent,
    OptionButtonsComponent,
    RequestCardforChildComponent,      
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
    FormsModule,
    MatIconModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
