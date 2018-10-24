import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forgot-pass-box',
  templateUrl: './forgot-pass-box.component.html',
  styleUrls: ['./forgot-pass-box.component.css']
})
export class ForgotPassBoxComponent implements OnInit {

  submitted = false;
  forgotPassForm: FormGroup;
  passwordPattern: string='^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder) { }


  get f() { return this.forgotPassForm.controls; }

  ngOnInit() {
    this.forgotPassForm = this.formBuilder.group({
      email: ['', [Validators.required]]
    })
  }

  toLoginPage(){
    this.router.navigateByUrl('');
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.submitted);
    if (this.forgotPassForm.invalid) {
      return;
    }
  }

  emailRequired(): boolean{
    if (this.f.email.errors !== null) {
      return this.f.email.errors.required && this.f.email.touched || this.submitted && this.f.email.errors.required;
    }
  }

  emailInvalid(): boolean {
    if (this.f.email.errors !== null) {
      return this.f.email.errors.pattern && this.submitted;
    }
  }
}
