import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';

//import { HomeComponent } from './home/home.component';

import { ServiceService } from './service.service';
import { appComponents, AppRoutingModule } from './app-routing.module';
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminUserComponent } from './admin-user/admin-user.component';


@NgModule({
  declarations: [
    AppComponent,
    appComponents,
    SignInComponent,
    SignupComponent,
    ProfileComponent,
    AdminComponent,
    AdminProfileComponent,
    AdminUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
