import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { ProfileHistoryComponent } from './profile-history/profile-history.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { JobsComponent } from './jobs/jobs.component';
import { UsersAdminPageComponent } from './users-admin-page/users-admin-page.component';

const routes: Routes = [
      { path: '', component: LandingPageComponent},
     { path: 'login', component: SignInComponent, pathMatch:'full' },
     { path: 'register', component: SignupComponent },
     { path: 'details', component: UsersAdminPageComponent },
     { path: 'profiles', component: ProfileComponent },
     { path: 'jobs', component: JobsComponent },
     {path: 'users', component: UsersComponent},
     { path: 'profile-history/:number', component: ProfileHistoryComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const appComponents = [SignInComponent];
