import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './pages/auth/login-page/login-page.component';
import {SignupPageComponent} from './pages/auth/signup-page/signup-page.component';
import {PasswordResetPageComponent} from './pages/auth/password-reset-page/password-reset-page.component';
import {RegisterMemberPageComponent} from './pages/register-member-page/register-member-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: 'reset-password', component: PasswordResetPageComponent},
  {path: 'register-member', component: RegisterMemberPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
