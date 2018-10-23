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


  mouseDownEvent(){
    this.passwordType = 'text'
    this.passwordChange = true;

  }

  mouseUpEvent(){
    this.passwordType = 'password'
    this.passwordChange = false;
  }

}
