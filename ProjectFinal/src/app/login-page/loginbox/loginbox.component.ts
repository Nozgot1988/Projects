import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-loginbox',
  templateUrl: './loginbox.component.html',
  styleUrls: ['./loginbox.component.css']
})
export class LoginboxComponent implements OnInit {

   public name ="";

    goToSignUp() {
        this.router.navigateByUrl('/sign-up');
    };

    goToForgotPass(){
        this.router.navigateByUrl('forgot-pass');
    }

    loginUser(login, password){


    }

  constructor(private router: Router) { }

  ngOnInit() {
  }


}
