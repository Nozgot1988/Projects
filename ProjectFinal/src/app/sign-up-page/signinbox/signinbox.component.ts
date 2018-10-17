import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-signinbox',
  templateUrl: './signinbox.component.html',
  styleUrls: ['./signinbox.component.css']
})
export class SigninboxComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLogin(){
    this.router.navigateByUrl('');
  }

}
