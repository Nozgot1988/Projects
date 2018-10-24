import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginboxComponent } from './login-page/loginbox/loginbox.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { SigninboxComponent } from './sign-up-page/signinbox/signinbox.component';
import { RouterModule } from "@angular/router";
import { ForgotPassPageComponent } from './forgot-pass-page/forgot-pass-page.component';
import { ForgotPassBoxComponent } from './forgot-pass-page/forgot-pass-box/forgot-pass-box.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UsersListComponent } from './users-list/users-list.component';
import { TableComponent } from './users-list/table/table.component';
import {HttpModule} from "@angular/http";

const routes = [
    {path: '', component: LoginPageComponent},
    {path: 'sign-up', component: SignUpPageComponent},
    {path: 'forgot-pass', component: ForgotPassPageComponent},
    {path: 'user-list', component: UsersListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginboxComponent,
    LoginPageComponent,
    SignUpPageComponent,
    SigninboxComponent,
    ForgotPassPageComponent,
    ForgotPassBoxComponent,
    UsersListComponent,
    TableComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


