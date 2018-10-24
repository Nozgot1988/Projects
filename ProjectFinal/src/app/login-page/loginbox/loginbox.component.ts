import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-loginbox',
  templateUrl: './loginbox.component.html',
  styleUrls: ['./loginbox.component.css']
})
export class LoginboxComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  passwordType: string = 'password';
  passwordChange: boolean = false;
  pattern: string = '^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })

  }


  get f() { return this.loginForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
  }

  goToSignUp(){
    this.router.navigateByUrl("sign-up")
  }

  goToForgotPass(){
    this.router.navigateByUrl("forgot-pass")
  }

  goToUsersList(){
    this.router.navigateByUrl('user-list')
  }


  mouseDownEvent(){
    this.passwordType = 'text';
    this.passwordChange = true;

  }

  mouseUpEvent(){
    this.passwordType = 'password';
    this.passwordChange = false;
  }

  addErrorClassLogin(): boolean {
    if (this.f.login.errors !== null) {
      return this.f.login.errors.required && this.f.login.touched || this.submitted && this.f.login.errors.pattern || this.f.login.errors.required && this.submitted;
    }
  }

  loginRequirementCheck(): boolean {
    if (this.f.login.errors !== null) {
      return this.f.login.errors.required && this.f.login.touched || this.f.login.errors.required && this.submitted;
    }
  }

  loginValidCheck(): boolean{
    if (this.f.login.errors !== null) {
      return this.f.login.errors.pattern && this.submitted;
    }
  }

  addErrorClassPassword(): boolean{
    if (this.f.password.errors !== null) {
      return this.f.password.errors.required && this.f.password.touched || this.submitted && this.f.password.errors.required;
    }
  }

  passwordRequirementCheck(): boolean {
    if (this.f.password.errors !== null) {
      return this.f.password.touched && this.f.password.errors.required || this.f.password.errors.required && this.submitted;
    }
  }

}
