import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../../user.model";
import {FormGroup, FormBuilder, Validators, AbstractControl} from "@angular/forms";

function passwordConfirming(c: AbstractControl): any {
  if(!c.parent || !c) return;
  const pwd = c.parent.get('password');
  const cpwd = c.parent.get('confirmPassword');

  if(!pwd || !cpwd) return ;
  if (pwd.value !== cpwd.value) {
    return { invalid: true };
  }
}

@Component({
  selector: 'app-signinbox',
  templateUrl: './signinbox.component.html',
  styleUrls: ['./signinbox.component.css']
})
export class SigninboxComponent implements OnInit {

  submitted = false;
  signUpForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required, passwordConfirming]],
      email: ['', Validators.required],
      country: ['', Validators.required]
    });

    this.signUpForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.signUpForm);
    });

  }

  get f() { return this.signUpForm.controls; }

  goToLogin(){
    this.router.navigateByUrl('');
  }


  onSubmit(): void {
      this.submitted = true;
      this.logValidationErrors(this.signUpForm);
  }

  validationMessages = {
    'firstName': {
      'required': 'Full name is required.',
      'minlength': 'Must be greater than 1 character.'
    },
    'lastName': {
      'required': 'Last name is required.',
      'minlength': 'Must be greater than 1 character.'
    },
    'password': {
      'required': 'Password is required.',
      'pattern': 'Password must be  between 4-8 characters and have at least 1 digit.'
    },
    'confirmPassword': {
      'required': 'Please confirm the password.',
      'invalid': 'Does not match'

    },
    'email': {
      'required': 'E-mail is required.',
      'pattern': 'E-mail is invalid'
    },
    'country': {
      'required': 'Country is required'
    }
  };

  formErrors = {
    'firstName': '',
    'lastName': '',
    'password': '',
    'confirmPassword': '',
    'email': '',
    'country': ''
  };
  
  logValidationErrors(group: FormGroup = this.signUpForm): void{
    Object.keys(group.controls).forEach((key: string) => {
      const  abstractControl = group.get(key);
      this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty || this.submitted)){
          const messages = this.validationMessages[key];
          for (const errorKey in abstractControl.errors){
            if (errorKey){
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          }
        }
    });
  }
}
