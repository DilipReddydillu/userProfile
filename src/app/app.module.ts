import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { FilterPipeModule } from 'ngx-filter-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MyOwnCustomMaterialModule} from './angularMaterial';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { ServiceService } from './service.service';
import { appComponents, AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { ProfileHistoryComponent } from './profile-history/profile-history.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { JobsComponent } from './jobs/jobs.component';


@NgModule({
  declarations: [
    AppComponent,
    appComponents,
    SignInComponent,
    SignupComponent,
    ProfileComponent,
    AdminComponent,
    AdminProfileComponent,
    AdminUserComponent,
    ProfileHistoryComponent,
    LandingPageComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule
  ],
  providers: [ServiceService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
