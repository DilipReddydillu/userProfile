import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { ProfileHistoryComponent } from './profile-history/profile-history.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [
      { path: '', component: LandingPageComponent},
     { path: 'login', component: SignInComponent, pathMatch:'full' },
     { path: 'register', component: SignupComponent },
     { path: 'profile', component: ProfileComponent },
     { path: 'jobs', component: JobsComponent },
     { path: 'profile-history/:number', component: ProfileHistoryComponent},
     { path: 'admin', component: AdminComponent,
     children: [
       {path: 'profiles', component: ProfileComponent},
       {path: 'users', component: AdminUserComponent}
     ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const appComponents = [SignInComponent];
