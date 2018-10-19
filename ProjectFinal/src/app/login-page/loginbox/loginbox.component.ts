import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-loginbox',
  templateUrl: './loginbox.component.html',
  styleUrls: ['./loginbox.component.css']
})
export class LoginboxComponent implements OnInit {

  loginValue: string = '';

  inputAreaEmpty(){
    if (this.loginValue != '') {
      console.log(this.loginValue);
    }
  }

  constructor(
    private router: Router) { }

  ngOnInit() {

  }



}
