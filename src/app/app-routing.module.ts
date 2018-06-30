import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminUserComponent } from './admin-user/admin-user.component';

const routes: Routes = [
     { path: 'login', component: SignInComponent, pathMatch:'full' },
     { path: 'register', component: SignupComponent },
     { path: 'profile', component: ProfileComponent },
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
